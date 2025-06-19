describe('Verify All Products and product detail page', ()=>{
    it('Test Case 8: Verify All Products and product detail page', ()=>{
        // Lanch browser
        cy.visitHomePage()
        cy.visitProductPage()

        cy.get('.product-image-wrapper').should('be.visible')
        cy.contains('View Product').first().click()

        cy.url().should('include', 'product_details')
    
         // Giả sử có 1 sản phẩm có tên là "Blue Top"
        cy.get('.product-information h2').should('be.visible').and('have.text', 'Blue Top')
        
        // Giả sử có danh mục sản phẩm là Category: Women > Tops
        cy.get('.product-information p').contains('Category:').should('be.visible')
        .and('contain', 'Category: Women > Tops');

        // Giả sử có giá sản phẩm là Rs. 500
        cy.get('.product-information span').contains('Rs. 500').should('be.visible');

        // Giả sử có Availability: là In Stock
        cy.get('.product-information p').contains('Availability:').should('be.visible')
        cy.get('.product-information p').should('include.text', 'In Stock');

        // Giả sử có Condition: là New
        cy.get('.product-information p').contains('Condition:').should('be.visible')
        cy.get('.product-information p').should('include.text', 'New')

        // Giả sử có Brand: là Polo
        cy.get('.product-information p').contains('Brand:').should('be.visible')
        cy.get('.product-information p').should('include.text', 'Polo')
    })
})