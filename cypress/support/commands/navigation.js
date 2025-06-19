Cypress.Commands.add('visitHomePage', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.url().should('include', 'automationexercise.com')
    cy.get('body').should('be.visible')
  })
  