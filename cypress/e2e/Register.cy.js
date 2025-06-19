describe('Register' , ()=>{
    const email = 'testuser' + Date.now() + '@example.com';
    const username = "TestUser";
    const password = '1235678'; 
    it('Register new user', ()=>{

        // Lanch browser
        cy.visitHomePage()

        //Click Signup / LoginLogin
        cy.contains('Signup / Login').click()
        // New User Signup! visiblevisible
        cy.contains('New User Signup!').should('be.visible')
        
        cy.registerUser(email, username, password)

        // cy.deleteAccount()

    })

   it('Register with existing email', ()=>{
   
       // Lanch browser
       cy.visitHomePage()

       //Click Signup / LoginLogin
       cy.contains('Signup / Login').click()
       // New User Signup! visiblevisible
       cy.contains('New User Signup!').should('be.visible')
       
       cy.get('input[data-qa="signup-name"]').type(username)
       cy.get('input[data-qa="signup-email"]').type(email)

       cy.get('button[data-qa="signup-button"]').click()

       cy.contains('Email Address already exist!').should('be.visible')

   })
})