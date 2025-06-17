describe('Verify Subscription', ()=>{
    it('Subscribe to newsletter', ()=>{
        // Launch browser
        cy.visit('http://automationexercise.com')
        // Navigate to url
        cy.url().should('include', 'automationexercise.com')
        // Home page visible
        cy.get('body').should('be.visible')
        
        cy.scrollTo('bottom')

        cy.contains('Subscription').should('be.visible')

        var email = 'testuser' + Date.now() + '@example.com'

        cy.get('input[id="susbscribe_email"').type(email)
        cy.get('input[id="susbscribe_email"]').should('have.value', email)
        cy.get('button[id="subscribe"]').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
       
    })
})