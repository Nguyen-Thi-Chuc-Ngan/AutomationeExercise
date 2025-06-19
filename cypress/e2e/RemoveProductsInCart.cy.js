describe('Remove Products in Cart', () => {
    it('Remove products from cart', () => {
        cy.visitHomePage();

        // Add products to cart
        cy.addProductsToCart();

        // Navigate to cart
        cy.contains('Cart').click();

        cy.get('body').should('be.visible');

        // Remove products from the cart
        cy.get('.cart_quantity_delete i').click(); // Adjust the selector as needed for your cart item

        // Verify the cart is empty
        cy.get('#empty_cart').should('be.visible')
    });
})
