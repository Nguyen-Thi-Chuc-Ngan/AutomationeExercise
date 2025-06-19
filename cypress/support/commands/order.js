
Cypress.Commands.add('verifyAddressDetails', () => {
    cy.get('#address_delivery').first().within(() => {
        cy.contains('Mrs. John Doe')
        cy.contains('Example Inc.')
        cy.contains('123 Main St')
        cy.contains('Apt 4B')
        cy.contains('Los Angeles California 90001')
        cy.contains('India')
        cy.contains('1234567890')
      })
});

Cypress.Commands.add('verifyReviewYourOrder', () => {
    cy.get('#product-1').should('have.length', 1)
    cy.get('#product-1 .cart_price p').should('have.text', 'Rs. 500')
    cy.get('#product-1 .cart_quantity .disabled').should('have.text', '1')
    cy.get('#product-1 .cart_total_price').should('have.text', 'Rs. 500')
});


Cypress.Commands.add('placeOrderAndVerifyBeforeRedirect', () => {
    cy.contains('Cart').click()
    cy.contains('Proceed To Checkout').click()

    cy.verifyAddressDetails()
    cy.verifyReviewYourOrder()

    cy.get('textarea[name="message"]').type('This is a test order.')
    cy.get('textarea[name="message"]').should('have.value', 'This is a test order.')

    cy.contains('Place Order').click()

    cy.wait(500) // Chờ trang thanh toán hiển thị

    cy.get('input[data-qa="name-on-card"]').type('John Doe').should('have.value', 'John Doe')
    cy.get('input[data-qa="card-number"]').type('4111111111111111').should('have.value', '4111111111111111')
    cy.get('input[data-qa="cvc"]').type('123').should('have.value', '123')
    cy.get('input[data-qa="expiry-month"]').type('12').should('have.value', '12')
    cy.get('input[data-qa="expiry-year"]').type('2025').should('have.value', '2025')

    cy.get('form').then(($form) => {
        $form.on('submit', (e) => {
            e.preventDefault() // Ngăn chuyển trang ngay
        })
    })

    cy.get('button[data-qa="pay-button"]').click()

    cy.contains('Your order has been placed successfully!').should('be.visible')
})