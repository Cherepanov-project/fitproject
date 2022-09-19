import {
  generateRandomString,
  generateRandomPhoneNumber,
} from "../support/testUtils"

const randomPassword = `${generateRandomString(7) + 'tT#1'}`

describe("registration a new user", () => {
  it("should visit the register page", () => {
    cy.visit("http://localhost:3000/fitproject/user/register")
  })

  it("next step button should not work without filling all inputs", () => {
    cy.get('button[type="submit"]').click()
  })

  it("all inputs must be required", () => {
    cy.get("form div.MuiBox-root").each(el => {
      expect(el.text()).equal("Required")
    })
  })

  it("user must fill in the email field", () => {
    cy.get('input[name="email"]').type(
      `${generateRandomString(10)}@gmail.com`
    )
  })

  it("user must fill in the username field", () => {
    cy.get('input[name="username"]').type(generateRandomString(10))
  })

  it("user must fill in the phone number field", () => {
    cy.get('input[name="phone"]').type(generateRandomPhoneNumber())
  })

  it("user must fill in the password fields", () => {
    cy.get('input[name="password"]').type(randomPassword)
    cy.get('input[name="confirmPassword"]').type(randomPassword)
  })

  it("show password btn must show the password", () => {
    cy.get('[data-testid="show-password"]').click({ multiple: true })
  })

  it("next step should work if everything is correct", () => {
    cy.get('button[type="submit"]').click()
  })

  it("previous step should back to previous step", () => {
    cy.get("form div div.MuiGrid-root:first-child button").click()
  })

  it("next step should work if everything is correct", () => {
    cy.get('button[type="submit"]').click()
  })

  it("should fill in the prohibited products input", () => {
    cy.get('input[name="prohibitedProducts"]').type(
      `${generateRandomString(5)}, ${generateRandomString(3)}, ${generateRandomString(7)}`
    )
  })

  it("should fill in the wish products input", () => {
    cy.get('input[name="wishProducts"]').type(
    `${generateRandomString(3)}, ${generateRandomString(6)}, ${generateRandomString(8)}`
    )
  })

  it("should select goal input", () => {
    cy.get('select[name="goal"]').select(1)
  })

  it("should fill in the quantity meals a day input", () => {
    cy.get('input[name="quantityMeals"]').type('3')
  })

  it("next step should work if everything is correct", () => {
    cy.get('button[type="submit"]').click()
  })

  it("should select type of program input", () => {
    cy.get('select[name="typeOfProgram"]').select(1)
  })

  it("should select number of workouts input", () => {
    cy.get('select[name="numberOfWorkouts"]').select(1)
  })

  it("should select type of trainings input", () => {
    cy.get('select[name="typeOfTrainings"]').select(1)
  })

  it("create account button must create an account", () => {
    cy.get('button[type="submit"]').click()
  })

})
export {}
