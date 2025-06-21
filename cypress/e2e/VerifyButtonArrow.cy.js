describe('Verify Button Arrow', () => {
  it('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    // Launch browser
    cy.visitHomePage();

    cy.scrollTo('bottom');

    cy.contains('Subscription').should('be.visible');

    cy.get('#scrollUp').should('be.visible').click();

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

  });



  it('Test Case 26: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    // Launch browser
    cy.visitHomePage();

    // Scroll down to the bottom of the page
    cy.scrollTo('bottom');

    cy.contains('Subscription').should('be.visible');

    cy.scrollTo('top');

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  });
});