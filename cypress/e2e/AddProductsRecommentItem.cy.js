describe('Add to cart from Recommended items', () => {
    it('Test Case 22: Add to cart from Recommended items', () => {
        cy.visitHomePage();

        cy.scrollTo('bottom');
        cy.contains('recommended items').should('be.visible');

        cy.get('#recommended-item-carousel .productinfo p').first().then(($name) => {
            const productName = $name.text().trim();    

            cy.get('#recommended-item-carousel .product-image-wrapper .add-to-cart i').first().click({ force: true });

            cy.contains('View Cart').click();

            cy.get('#cart_info_table tbody tr').should('have.length', 1);
            cy.get('#cart_info_table .cart_description h4 a').should('have.text', productName);

        });    
    });
});