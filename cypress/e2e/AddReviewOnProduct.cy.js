describe('Add review on product', () => {
    it('Test Case 21: Add review on product', () => {
        // Launch browser
        cy.visitHomePage();
        cy.visitProductPage();

        cy.contains('View Product').first().click();    
        cy.contains('Write Your Review').should('be.visible');

        cy.get('#name').type('John Doe');
        cy.get('#email').type('example1@example.com');
        cy.get('#review').type('This is a test review for the product.');

        cy.get('#button-review').click();

        cy.contains('Thank you for your review.').should('be.visible');
    });
});