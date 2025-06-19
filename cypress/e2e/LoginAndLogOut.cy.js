describe('Login and Logout', ()=>{
    let email;
    const password = '1235678';
    const username = "TestUser";

    before(() => {
        email = 'testuser' +  Date.now() + '@example.com';
        cy.visitHomePage()
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')
        cy.registerUser(email, password, username)
        cy.contains('Logout').click()
    });

    it('Login User with correct email and password', ()=>{
        // Lanch browser
        cy.login(email, password)

        cy.contains(' Logged in as ' + username).should('be.visible')
        cy.deleteAccount()
    })

    it('Login User with incorrect email and password', ()=>{
        cy.visitHomePage()
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')
        cy.registerUser(email, password, username)
        cy.contains('Logout').click()
        cy.login('wrong_' + email, password)
        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Logout', ()=>{
        cy.visitHomePage()
        cy.login(email, password)
        cy.wait(1000)
        
        cy.contains(' Logged in as ' + username).should('be.visible')
        
        cy.contains('Logout').click()
        cy.url().should('include', "/login")

    })

})