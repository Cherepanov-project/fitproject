import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import { waitFor } from "@testing-library/react"
import SingInForm from "../common/form-admin/singInForm"
import Cookies from "js-cookie"
import MockedImage from "next/image"
import api from "../services"

jest.mock("next/image", () => {
    return function DummyImage() {
        return <div></div>
    }
})
let container = null
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it("Cookies filled", async () => {
    const spy = jest.spyOn(api.auth, "login")
    await waitFor(() => {
        render(<SingInForm />, container)
    })
    document
        .querySelector("input[type='email']")
        .setAttribute("value", "testAdmin1992")
    document
        .querySelector("input[type='password']")
        .setAttribute("value", "testAdmin")

    const button = document.querySelector("button[type='submit']")
    Cookies.remove("auth-token")
    Cookies.remove("username")
    Cookies.remove("image")

    expect(Cookies.get("auth-token")).not.toBeDefined()
    expect(Cookies.get("username")).not.toBeDefined()
    expect(Cookies.get("image")).not.toBeDefined()

    await waitFor(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    setTimeout(() => {
        expect(spy).toHaveBeenCalled()
        expect(Cookies.get("auth-token")).toBeDefined()
        expect(Cookies.get("username")).toBeDefined()
        expect(Cookies.get("image")).toBeDefined()
    }, 4000)
})
