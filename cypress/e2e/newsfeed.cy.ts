describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    // cy.get(':nth-child(1) > .MuiFormControl-root > .regOrLoginSocialstyles__Input-sc-11s047d-10')
    cy.title().should('include', 'Kitchen Sink')
  })
})