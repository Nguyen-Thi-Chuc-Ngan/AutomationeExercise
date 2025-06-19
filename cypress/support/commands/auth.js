Cypress.Commands.add('registerUser', (email, username, password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile) => {
    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!").should("be.visible");
    
    cy.get('input[data-qa="signup-name"]').type(username)
    cy.get('input[data-qa="signup-name"]').should('have.value', username)
    cy.get('input[data-qa="signup-email"]').type(email)
    cy.get('input[data-qa="signup-email"]').should('have.value', email)

    cy.get('button[data-qa="signup-button"]').click()
    cy.contains('Enter Account Information', {timeout: 10000  }).should('be.visible')

    cy.get('#id_gender2').check()
    cy.get('#name').should('have.value', username)
    cy.get('#email').should('have.value', email)
    cy.get('#password').type(password)
    cy.get('select[data-qa="days"]').select('12')
    cy.get('select[data-qa="days"]').should('be.visible')
    cy.get('select[data-qa="months"]').select('January')
    cy.get('select[data-qa="months"]').should('be.visible')
    cy.get('select[data-qa="years"]').select('2012')
    cy.get('select[data-qa="years"]').should('be.visible')

    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('input[data-qa="first_name"]').type(firstName)  // First name
    cy.get('input[data-qa="first_name"]').should('have.value', firstName)

    cy.get('input[data-qa="last_name"]').type(lastName)   // Last name
    cy.get('input[data-qa="last_name"]').should('have.value', lastName)

    cy.get('input[data-qa="company"]').type(company) // Company
    cy.get('input[data-qa="company"]').should('have.value', company)

    cy.get('#address1').type(address1) // Address
    cy.get('#address1').should('have.value', address1)

    cy.get('#address2').type(address2) // Address
    cy.get('#address2').should('have.value', address2)

    cy.get('select[data-qa="country"]').select(country)
    cy.get('select[data-qa="country"]').should('have.value',country)

    cy.get('input[data-qa="state"]').type(state) // State
    cy.get('input[data-qa="state"]').should('have.value', state)

    cy.get('input[data-qa="city"]').type(city) // City
    cy.get('input[data-qa="city"]').should('have.value', city)

    cy.get('input[data-qa="zipcode"]').type(zipcode)  // Zipcode
    cy.get('input[data-qa="zipcode"]').should('have.value', zipcode)

    cy.get('input[data-qa="mobile_number"]').type(mobile)  // Mobile Number
    cy.get('input[data-qa="mobile_number"]').should('have.value', mobile)

    cy.get('button[data-qa="create-account"]').click()
     
    cy.contains('Account Created!').should('be.visible')

    cy.get('a[data-qa="continue-button"]').click()

    cy.contains(' Logged in as ' + username).should('be.visible')

})

Cypress.Commands.add('deleteAccount',() => {
    cy.contains('Delete Account').should('be.visible').click()
    cy.contains('Account Deleted!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()
})


Cypress.Commands.add('login', (email, password) => {
    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')
  
    cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-email"]').should('have.value', email)
  
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('input[data-qa="login-password"]').should('have.value', password)
  
    cy.get('button[data-qa="login-button"]').click()
  })
  