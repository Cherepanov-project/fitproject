/**
 * @jest-environment jsdom
 */
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import User from "../pages/user/register"
import { waitFor, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import axios from "axios"
jest.mock("nanoid", () => {
    return { nanoid: () => "1234" }
})

jest.mock("axios")
jest.setTimeout(15000)
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

    it("Required fields on click next step", async () => {
        await waitFor(() => {
            render(<User />, container)
        })
        const button = screen.getByText(/next step/i)
        userEvent.click(button)
        const warnings = await screen.findAllByText(/required/i)
        warnings.forEach(warning => {
            expect(warning).toBeVisible()
        })
        expect(warnings.length).toBe(5)
    })

    it("Email validation invalid case", async () => {
        await waitFor(() => {
            render(<User />, container)
        })
        await userEvent.type(
            screen.getByPlaceholderText(/email/i),
            "invalid email"
        )
        await userEvent.tab()
        const warning = screen.getByText(/enter valid email/i)
        expect(warning).toBeVisible()
    })

    it("Email validation valid case", async () => {
        await waitFor(() => {
            render(<User />, container)
        })
        const input = screen.getByPlaceholderText(/email/i)
        await userEvent.type(input, "email@valid.com")
        await userEvent.tab()
        const warning = screen.queryByText(/enter valid email|required/i)
        expect(warning).toBeNull()
    })

    it("Show Password", async () => {
        await waitFor(() => {
            render(<User />, container)
        })

        const showButtons = screen.getAllByTestId("show-password")
        await userEvent.click(showButtons[0])
        const inputAfterFirstClick: any =
            screen.getByPlaceholderText("Password")
        expect(inputAfterFirstClick.type).toBe("text")

        await userEvent.click(showButtons[0])
        const inputAfterSecondClick: any =
            screen.getByPlaceholderText("Password")
        expect(inputAfterSecondClick.type).toBe("password")
    })

    it("Register Snackbar", async () => {
        const mockAxiosResponse: any = {
            data: { code: 200, success: true },
        }
        await waitFor(() => {
            render(<User />, container)
        })
        expect(screen.queryByTestId("snackbar")).toBeNull()
        axiosMock.mockResolvedValueOnce(mockAxiosResponse)
        const nextStep = screen.getByText(/next step/i)
        const emailInput = screen.getByPlaceholderText(/email/i)
        const usernameInput = screen.getByPlaceholderText(/username/i)
        const phoneInput = screen.getByPlaceholderText(/contact/i)
        const passwordInput = screen.getByPlaceholderText("Password")
        const confirmPasswordInput =
            screen.getByPlaceholderText("Confirm Password")

        await userEvent.type(emailInput, "email@valid.com")
        await userEvent.type(usernameInput, "username")
        await userEvent.type(phoneInput, "123456789")
        await userEvent.type(passwordInput, "12345Q1!q")
        await userEvent.type(confirmPasswordInput, "12345Q1!q")
        await userEvent.click(nextStep)
        await userEvent.click(nextStep)
        const submitButton = screen.getByText(/create account/i)
        await userEvent.click(submitButton)

        expect(await screen.findByTestId("snackbar")).toBeVisible()
    })
})
