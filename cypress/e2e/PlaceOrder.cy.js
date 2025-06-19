describe('Place Order', ()=>{
    let email;
    const password = '1235678';
    const username = 'TestUser';

    beforeEach(() => {
        email = 'TestUser' + Date.now() + '@example.com';
    });

    it('Register while Checkout', ()=>{
        cy.visitHomePage()

        // Click on Products
        cy.addProductsToCart()
        cy.contains('Cart').click()

        cy.get('body').should('be.visible')

        cy.contains('Proceed To Checkout').click()

        cy.get('.modal-body a[href="/login"]').should('be.visible').click()
        cy.registerUser(email, username, password)

        cy.placeOrderAndVerifyBeforeRedirect()
        cy.deleteAccount()

    })

    it('Register before Checkout', ()=>{
        cy.visitHomePage()


        cy.contains('Signup / Login').click()

        cy.contains('New User Signup!').should('be.visible')
        cy.registerUser(email, username, password)

        cy.addProductsToCart()
        cy.placeOrderAndVerifyBeforeRedirect()
        cy.deleteAccount()
    })

    it('Login before Checkout', ()=>{
        
        cy.visitHomePage()
        cy.contains('Signup / Login').click()
        cy.registerUser(email, password, username)
        cy.contains('Logout').click()
        cy.login(email, password)

        cy.contains(' Logged in as ' + username).should('be.visible')

        cy.addProductsToCart()
        cy.placeOrderAndVerifyBeforeRedirect()

        cy.deleteAccount()
    })
})