describe("Add Products In Cart", () => {
    const index_product = 0;
    const expect_price = "Rs. 500";
    const quantity = "1";
    const index_product_2 = 1;
    const expect_price_2 = "Rs. 400";
    const quantity_2 = "1";

  it("Test Case 12: Add Products in Cart", () => {
    // Launch browser
    cy.visitHomePage();

    cy.contains("Products").should("be.visible").click();

    cy.addProductToCart(index_product, expect_price, quantity);

    cy.get(".btn-success").should("be.visible", "Continue Shopping").click();

    cy.addProductToCart(index_product_2, expect_price_2, quantity_2);

    cy.contains("View Cart").should("be.visible").click();

    cy.verifyProductToCart(index_product, expect_price, quantity);

    cy.verifyProductToCart(index_product_2, expect_price_2, quantity_2);


  });
});
