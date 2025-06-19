import 'cypress-file-upload';

describe('', ()=>{

    const email = 'testuser1745465282598@example.com';
    const password = '1235678';
    const username = "TestUser";
    const filePath = 'text.txt';

    it('Contact Us Form', ()=>{
        cy.visitHomePage()

        cy.contains('Contact us').click()
        cy.contains('Get In Touch').should('be.visible')

        cy.get('input[data-qa="name"]').type(username)
        cy.get('input[data-qa="name"]').should('have.value', username)

        cy.get('input[data-qa="email"]').type(email)
        cy.get('input[data-qa="email"]').should('have.value', email)

        cy.get('input[data-qa="subject"]').type('Test subject')
        cy.get('input[data-qa="subject"]').should('have.value', 'Test subject')

        cy.get('textarea[data-qa="message"]').type('Test message')
        cy.get('textarea[data-qa="message"]').should('have.value', 'Test message')

        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('input[type="file"]').should('have.value', `C:\\fakepath\\${filePath}`);

        cy.get('input[data-qa="submit-button"]').click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.get('.btn.btn-success').click();
        cy.url().should('include', 'automationexercise.com')
    })

})