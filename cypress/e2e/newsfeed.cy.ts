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
    cy.get('form div div:nth-child(2)').each((el) => {
      expect(el.text()).equal("Required");
    })

    cy.get('[name="username"]')
      .type('admin1')
      .should('have.value', 'admin1');
    cy.get('[name="password"]')
      .type('password')
      .should('have.value', 'password');

    cy.get('[data-testid="submitButton"]').click();
    cy.wait(5000);
    cy.url().should('include', '/fitproject/user/statistics');

    cy.get('[data-cy="cy-select"]').select('Week');
    cy.get('[data-cy="cy-select"]').select('Month');
    cy.get('[data-cy="cy-select"]').select('Year');

    cy.get('[href="/fitproject/user/listOfDishes"]').click();
    cy.url().should('include', '/fitproject/user/listOfDishes');
    cy.get('[type="checkbox"]').check();
    cy.get('[href="/user/listOfDishes/dish/"]');
  })
})