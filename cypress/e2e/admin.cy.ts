import {
  generateRandomString
} from "../support/testUtils"

const username = generateRandomString(10)
const randomPassword = generateRandomString(7)

describe("admin panel", () => {
  it("should visit the admin admin page", () => {
    cy.visit("http://localhost:3000/fitproject/admin")
  })

  it("should redirect to sign up a new admin account", () => {
    cy.get('a[href="/fitproject/admin/sign-up"]').click()
    cy.wait(3000)
  })

  it("all inputs should are required", () => {
    cy.get('button[type="submit"]').click()
  })

  it("admin must fill in the admin name field", () => {
    cy.get('input[name="username"]').type(username)
  })

  it("admin must fill in the admin email field", () => {
    cy.get('input[name="email"]').type(`${generateRandomString(10)}@gmail.com`)
  })

  it("admin must fill in the password fields", () => {
    cy.get('input[name="password"]').type(randomPassword)
    cy.get('input[name="repeat_password"]').type(randomPassword)
  })

  it("show password btn must show the password", () => {
    cy.get('button[data-testid="show-password"]').click({ multiple: true })
  })

  it("create button should create an admin account", () => {
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
  })

  it("redirect to login page correctly", () => {
    cy.url().should("include", "/fitproject/admin")
  })

  it("admin must fill in the admin name field", () => {
    cy.get('input[name="username"]').type(username)
  })

  it("admin must fill in the password fields", () => {
    cy.get('input[name="password"]').type(randomPassword)
  })

  it("show password btn must show the password", () => {
    cy.get('button[data-testid="show-password"]').click()
  })

  it("admin should logged in an account", () => {
    cy.get('button[type="submit"]').click()
  })

})

export {}
