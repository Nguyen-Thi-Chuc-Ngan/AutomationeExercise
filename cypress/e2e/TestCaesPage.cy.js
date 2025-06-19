describe('Test Cases Page', ()=>{
    it('Test Case 7: Verify Test Cases Page', ()=>{
        cy.visitHomePage()

        //Click Test Cases
        cy.contains('Test Cases').click()
        // Test Cases visiblevisible
        cy.url().should('include', 'test_cases')
        cy.contains('Test Cases').should('be.visible')
    })
})