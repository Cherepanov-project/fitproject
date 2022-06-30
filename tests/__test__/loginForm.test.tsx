/**
 * @jest-environment jsdom
 */
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { LoginForm } from "../../pages/user/login/loginForm"
import { waitFor } from "@testing-library/react"
import { nanoid } from "nanoid"

jest.mock("nanoid", () => {
    return { nanoid: () => "1234" }
})

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
    const errorsFields = document.querySelectorAll("form div div:nth-child(2)")

    expect(errorsFields[0].innerHTML).toBe("Required")
    expect(errorsFields[1].innerHTML).toBe("Required")
})
