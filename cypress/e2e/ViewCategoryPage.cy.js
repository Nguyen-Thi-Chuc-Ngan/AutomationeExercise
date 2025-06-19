/// <reference types="cypress" />
describe('View Category Page', () => {

    it('View Category Page', () => {
            cy.visitHomePage();

            // Click on Products
            cy.contains('Products').click();

            // Verify the category page is displayed
            cy.get('.features_items').should('be.visible');

            // Verify the category title
            cy.contains('All Products').should('be.visible');

            // Verify the products are displayed
            cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
        });    

    
});