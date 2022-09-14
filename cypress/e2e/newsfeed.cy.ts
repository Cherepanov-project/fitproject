describe('fit spec', () => {
  // it('Gets, types and asserts', () => {
  //   cy.visit('https://example.cypress.io')
  //
  //   cy.contains('type').click()
  //
  //   // Should be on a new URL which
  //   // includes '/commands/actions'
  //   cy.url().should('include', '/commands/actions')
  //
  //   // Get an input, type into it and verify
  //   // that the value has been updated
  //   cy.get('.action-email')
  //       .type('fake@email.com')
  //       .should('have.value', 'fake@email.com')
  // })
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/fitproject/user')

    cy.get('[data-testid="submitButton"]').click()
    // const errorsFields = document.querySelectorAll("form div div:nth-child(2)")
    cy.get('form div div:nth-child(2)').each((el) => {
      expect(el.text()).equal("Required");
    })
  })
})