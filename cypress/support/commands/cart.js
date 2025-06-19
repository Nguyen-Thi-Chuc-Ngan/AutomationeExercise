Cypress.Commands.add('addProductsToCart', () => {

    cy.contains('Products').click()
    cy.url().should('include', 'products')
    cy.get('.product-image-wrapper').should('be.visible').first().trigger('mouseover')
    cy.get('.product-image-wrapper').first().contains('Add to cart').click()

    cy.get('.btn-success').should('be.visible', 'Continue Shopping').click()
})
