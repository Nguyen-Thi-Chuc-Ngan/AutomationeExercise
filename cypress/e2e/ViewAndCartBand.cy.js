describe('View and Cart Band', () => {
    it('Test Case 19: View & Cart Brand Products', () => {
        cy.visitHomePage();
        // Check if the band is visible
        cy.contains('Products').should('be.visible');

        cy.contains('Brands').should('be.visible');
        cy.get('.left-sidebar .brands_products').should('be.visible');


        cy.contains('H&M').click();

        cy.url().should('include', '/brand_products/H&M');
        cy.get('.features_items h2').should('contain', 'Brand - H&M Products');

        cy.contains('Polo').click();
        cy.url().should('include', '/brand_products/Polo');

        cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
    });
});