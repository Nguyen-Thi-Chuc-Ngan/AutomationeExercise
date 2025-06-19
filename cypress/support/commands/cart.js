Cypress.Commands.add('addProductFristToCart', () => {
    cy.contains('Products').click()
    cy.url().should('include', 'products')
    cy.get('.product-image-wrapper').should('be.visible').first().trigger('mouseover')
    cy.get('.product-image-wrapper').first().contains('Add to cart').click()

    cy.get('.btn-success').should('be.visible', 'Continue Shopping').click()
})


Cypress.Commands.add('verifyCartContains', (expectedProducts) => {
  cy.get('#cart_info_table .cart_description h4 a').then(($cartItems) => {
    const cartNames = $cartItems.map((index, el) => el.innerText.trim()).get();
    expect(cartNames).to.include.members(expectedProducts);
  });
});

// Trong cypress/support/commands.js
Cypress.Commands.add('addProductToCart', (index, expectPrice, quantity = '1') => {
  cy.get('.product-image-wrapper')
    .eq(index)
    .should('be.visible')
    .trigger('mouseover');

  cy.get('.product-image-wrapper')
    .eq(index)
    .contains('Add to cart')
    .click();

});


Cypress.Commands.add('verifyProductToCart', (index_product, expect_price, quantity) => {
  cy.get("#cart_info_table tbody tr")
      .eq(index_product)
      .within(() => {
        cy.get(".cart_price p").should("have.text", expect_price);
        cy.get(".cart_quantity .disabled").should("have.text", quantity);
        cy.get(".cart_total_price").should("have.text", expect_price);
      });
});
