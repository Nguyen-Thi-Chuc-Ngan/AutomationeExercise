describe('Verify Subscription', ()=>{
    it('Test Case 10: Verify Subscription in home page', ()=>{
        cy.visitHomePage()

        cy.scrollTo('bottom')

        cy.contains('Subscription').should('be.visible')

        var email = 'testuser' + Date.now() + '@example.com'

        cy.get('input[id="susbscribe_email"').type(email)
        cy.get('input[id="susbscribe_email"]').should('have.value', email)
        cy.get('button[id="subscribe"]').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
       
    })

    it('Test Case 11: Verify Subscription in Cart page', ()=>{
        cy.visitHomePage()

        cy.contains('Cart').click()

        cy.scrollTo('bottom')

        cy.contains('Subscription').should('be.visible')
        var email = 'testuser' + Date.now() + '@example.com'
        cy.get('input[id="susbscribe_email"').type(email)
        cy.get('input[id="susbscribe_email"]').should('have.value', email)
        cy.get('button[id="subscribe"]').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    })
})