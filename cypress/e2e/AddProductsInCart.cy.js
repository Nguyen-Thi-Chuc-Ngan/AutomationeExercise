describe('Add Products In Cart', ()=>{
    it('Add products to cart', ()=>{
        // Launch browser
        cy.visitHomePage()

        cy.contains('Products').should('be.visible').click()

        cy.get('.product-image-wrapper').should('be.visible').first().trigger('mouseover')
        cy.get('.product-image-wrapper').first().contains('Add to cart').click()

        cy.get('.btn-success').should('be.visible', 'Continue Shopping').click()

        cy.get('.product-image-wrapper').should('be.visible').eq(1).trigger('mouseover')
        cy.get('.product-image-wrapper').eq(1).contains('Add to cart').click()

        cy.contains('View Cart').should('be.visible').click()
        
        cy.get('#cart_info_table tbody tr').should('have.length', 2)

        cy.get('#product-1 .cart_price p').should('have.text', 'Rs. 500')
        cy.get('#product-2 .cart_price p').should('have.text', 'Rs. 400')


        cy.get('#product-1 .cart_quantity .disabled').should('have.text', '1')
        cy.get('#product-2 .cart_quantity .disabled').should('have.text', '1')

        cy.get('#product-1 .cart_total_price').should('have.text', 'Rs. 500')
        cy.get('#product-2 .cart_total_price').should('have.text', 'Rs. 400')

    })
})