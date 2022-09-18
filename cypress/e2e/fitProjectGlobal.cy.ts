describe('fit spec', () => {
  it('Login, sections, links and visual elements testing', () => {
    cy.visit('/')

    cy.get('[data-testid="submitButton"]').click()
    cy.get('form div div:nth-child(2)').each((el) => {
      expect(el.text()).equal("Required");
    })
    cy.intercept('**/user/statistics*').as('statistics')
    cy.intercept('**/user/listOfDishes/dish/*').as('dish')
    cy.intercept('**/listOfDishes*').as('listOfDishes')
    cy.intercept('**/user/newsfeed*').as('newsfeed')
    cy.intercept('**/user/calendar*').as('calendar')
    cy.intercept('**/user/message*').as('message')
    cy.intercept('**/user/calendar/workout/*').as('calendarWorkout')

    cy.get('[name="username"]')
      .type('admin1')
      .should('have.value', 'admin1');
    cy.get('[name="password"]')
      .type('password')
      .should('have.value', 'password');

    cy.get('[data-testid="submitButton"]').click();
    cy.wait('@statistics');
    // cy.wait(7000);
    cy.url().should('include', '/user/statistics');

    cy.get('[data-cy="cy-select"]').select('Week');
    cy.get('[data-cy="cy-select"]').select('Month');
    cy.get('[data-cy="cy-select"]').select('Year');

    cy.get('[href="/fitproject/user/listOfDishes"]').click();
    // cy.wait(7000);
    cy.wait('@listOfDishes');

    cy.url().should('include', '/listOfDishes');
    cy.get('[type="checkbox"]').check();
    cy.get('[data-cy="ListDishes"] a').first().click({force: true});
    cy.wait('@dish');

    cy.url().should('include', '/listOfDishes/dish');
    cy.contains('Закрыть');
    cy.contains('View all ingredients');
    cy.contains('Add to favorites');

    cy.get('[alt="newsfeed"]').click({force: true});
    cy.wait('@newsfeed');
    // cy.visit('/newsfeed');
    cy.url().should('include', '/fitproject/user/newsfeed');
    cy.get('[data-cy="newsItem"]').first().click();
    cy.get('[data-cy="modal"]').click();

    cy.get('[alt="calendar"]').click();
    cy.wait('@calendar');
    cy.url().should('include', '/fitproject/user/calendar');
    cy.get('[data-cy="calendarWorkoutLink"]').first().click();
    cy.wait('@calendarWorkout');

    cy.get('[alt="message"]').click({force: true});
    cy.wait('@message');
    cy.url().should('include', '/fitproject/user/message');
    cy.get('[data-cy="cyChatItem"]')
    cy.get('[data-cy="cyChatItemUsername"]')
    cy.get('[data-cy="cyChatItemText"]')
    cy.get('[data-cy="cyChatItemDate"]')
    cy.get('input').should('have.value', '')
    cy.get('button').contains('Отправить')
  })
//
});
export {};