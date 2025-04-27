describe('Test Cases Page', ()=>{
    it('Test Cases Page', ()=>{
        // Lanch browser
        cy.visit('http://automationexercise.com')
        // Navigate to urlurl
        cy.url().should('include', 'automationexercise.com')
        // Home page visiblevisible
        cy.get('body').should('be.visible')
        //Click Test Cases
        cy.contains('Test Cases').click()
        // Test Cases visiblevisible
        cy.url().should('include', 'test_cases')
        cy.contains('Test Cases').should('be.visible')
    })
})