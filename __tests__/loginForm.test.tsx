/**
 * @jest-environment jsdom
 */
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { LoginForm } from "../pages/user/login/loginForm"
import { waitFor, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import axios from "axios"
jest.mock("nanoid", () => {
    return { nanoid: () => "1234" }
})

jest.mock("axios")

const axiosMock = axios as jest.MockedFunction<typeof axios>

describe("loginForm", () => {
    let container = null
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div")
        document.body.appendChild(container)
    })

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    it("Required fields", async () => {
        await waitFor(() => {
            render(<LoginForm />, container)
        })
        const buttons = document.querySelectorAll("button")
        await waitFor(() => {
            buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }))
        })
        const errorsFields = document.querySelectorAll(
            "form div div:nth-child(2)"
        )
        expect(errorsFields).toBeDefined()
        expect(errorsFields.length).toBe(2)
        expect(errorsFields[0].innerHTML).toBe("Required")
        expect(errorsFields[1].innerHTML).toBe("Required")
    })

    it("Snackbar", async () => {
        const mockAxiosResponse: any = {
            data: { code: 200, success: true, data: { jwtToken: "example" } },
        }
        await waitFor(() => {
            render(<LoginForm />, container)
        })
        expect(screen.queryByTestId("snackbar")).toBeNull()
        axiosMock.mockResolvedValueOnce(mockAxiosResponse)
        const submitButton = screen.getByTestId("submitButton")
        const usernameInput = screen.getByPlaceholderText(/user name/i)
        const passwordInput = screen.getByPlaceholderText(/password/i)

        userEvent.type(usernameInput, "username")
        userEvent.type(passwordInput, "password")
        userEvent.click(submitButton)

        expect(await screen.findByTestId("snackbar")).toBeVisible()
    })
})
