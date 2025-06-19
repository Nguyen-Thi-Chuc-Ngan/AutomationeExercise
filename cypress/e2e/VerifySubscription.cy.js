describe('Verify Subscription', ()=>{
    it('Subscribe to newsletter', ()=>{
        cy.visitHomePage()

        cy.scrollTo('bottom')

        cy.contains('Subscription').should('be.visible')

        var email = 'testuser' + Date.now() + '@example.com'

        cy.get('input[id="susbscribe_email"').type(email)
        cy.get('input[id="susbscribe_email"]').should('have.value', email)
        cy.get('button[id="subscribe"]').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
       
    })
})