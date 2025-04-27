describe('Login and Logout', ()=>{
    //Giả sử có user: testuser1745300674810@example.com
    //          pass: 12345678
    const email = 'testuser1745465282598@example.com';
    const password = '1235678';
    const username = "TestUser";

    it('Login User with correct email and password', ()=>{
        // Lanch browser
        cy.visit('http://automationexercise.com')
        // Navigate to urlurl
        cy.url().should('include', 'automationexercise.com')
        // Home page visiblevisible
        cy.get('body').should('be.visible')
        //Click Signup / LoginLogin
        cy.contains('Signup / Login').click()

        cy.get('input[data-qa="login-email"]').type(email)
        cy.get('input[data-qa="login-email"]').should('have.value', email)
        cy.get('input[data-qa="login-password"]').type(password)
        cy.get('input[data-qa="login-password"]').should('have.value', password)

        cy.get('button[data-qa="login-button"]').click()

        cy.contains(' Logged in as ' + username).should('be.visible')
        // cy.get('a[href="/delete_account"]').click()

        // cy.contains('Account Deleted!').should('be.visible')
        // cy.get('a[data-qa="continue-button"]').click()
    })

    it('Login User with incorrect email and password', ()=>{
        cy.visit('https://www.automationexercise.com/')
        cy.url().should('include', 'automationexercise.com')
        cy.get('body').should('be.visible')
        cy.contains('Signup / Login').click()
        cy.contains('Login to your account').should('be.visible')

        cy.get('input[data-qa="login-email"]').type('bna' +  email)
        cy.get('input[data-qa="login-email"]').should('have.value','bna' +  email)

        cy.get('input[data-qa="login-password"]').type(password + 'bana')
        cy.get('input[data-qa="login-password"]').should('have.value', password + 'bana')

        cy.get('button[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Logout', ()=>{
        cy.visit('https://www.automationexercise.com/')
        cy.url().should('include', 'automationexercise.com')

        cy.get('body').should('be.visible')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account').should('be.visible')

        cy.get('input[data-qa="login-email"]').type(email)
        cy.get('input[data-qa="login-email"]').should('have.value', email)
        cy.get('input[data-qa="login-password"]').type(password)
        cy.get('input[data-qa="login-password"]').should('have.value', password)

        cy.get('button[data-qa="login-button"]').click()
        cy.contains(' Logged in as ' + username).should('be.visible')

        cy.contains('Logout').click()
        cy.url().should('include', "/login")

    })

})