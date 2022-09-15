describe('fit spec', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3001/fitproject/user')

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
    cy.wait(5000);
    cy.url().should('include', '/fitproject/user/listOfDishes');
    cy.get('[type="checkbox"]').check();
    // cy.get('[href="/user/listOfDishes/dish/"]');
  })
});
export {};