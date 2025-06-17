describe('Search Product', ()=>{
    it('Search for a product', ()=>{
        // Launch browser
        cy.visit('http://automationexercise.com')
        // Navigate to url
        cy.url().should('include', 'automationexercise.com')
        // Home page visible
        cy.get('body').should('be.visible')
        
        // Click on Products
        cy.contains('Products').click()
        // All Products visible
        cy.url().should('include', 'products')
        cy.contains('All Products').should('be.visible')

        // Search for a product
        const searchTerm = 'Blue Top';
        cy.get('input[name="search"]').type(searchTerm)
        cy.get('input[name="search"]').should('have.value', searchTerm)
        cy.get('button[id="submit_search"]').click()

        cy.contains('Searched Products').should('be.visible')

        // Verify search results
        cy.contains(searchTerm).should('be.visible')
    })
})