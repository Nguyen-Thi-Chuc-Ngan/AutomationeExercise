Cypress.Commands.add('registerUser', (email, password, username) => {
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

    cy.get('input[data-qa="first_name"]').type('John')  // First name
    cy.get('input[data-qa="first_name"]').should('have.value', 'John')

    cy.get('input[data-qa="last_name"]').type('Doe')   // Last name
    cy.get('input[data-qa="last_name"]').should('have.value', 'Doe')

    cy.get('input[data-qa="company"]').type('Example Inc.') // Company
    cy.get('input[data-qa="company"]').should('have.value', 'Example Inc.')

    cy.get('#address1').type('123 Main St') // Address
    cy.get('#address1').should('have.value', '123 Main St')

    cy.get('#address2').type('Apt 4B') // Address
    cy.get('#address2').should('have.value', 'Apt 4B')

    cy.get('select[data-qa="country"]').select('India')
    cy.get('select[data-qa="country"]').should('have.value','India')

    cy.get('input[data-qa="state"]').type('California') // State
    cy.get('input[data-qa="state"]').should('have.value', 'California')

    cy.get('input[data-qa="city"]').type('Los Angeles') // City
    cy.get('input[data-qa="city"]').should('have.value', 'Los Angeles')

    cy.get('input[data-qa="zipcode"]').type('90001')  // Zipcode
    cy.get('input[data-qa="zipcode"]').should('have.value', '90001')

    cy.get('input[data-qa="mobile_number"]').type('1234567890')  // Mobile Number
    cy.get('input[data-qa="mobile_number"]').should('have.value', '1234567890')

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
  