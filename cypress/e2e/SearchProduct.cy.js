const userInfo = require("../fixtures/userInfo");

describe("Search Product", () => {
  it("Test Case 9: Search Product", () => {
    cy.visitHomePage();

    cy.visitProductPage();

    // Search for a product
    const searchTerm = "Blue Top";
    cy.get('input[name="search"]').type(searchTerm);
    cy.get('input[name="search"]').should("have.value", searchTerm);
    cy.get('button[id="submit_search"]').click();

    cy.contains("Searched Products").should("be.visible");

    // Verify search results
    cy.contains(searchTerm).should("be.visible");
  });

  const {
    email,
    password,
    username,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
  } = userInfo;

  it("Test Case 20: Search Products and Verify Cart After Login", () => {
    cy.visitHomePage();

    // Click on Products
    cy.contains("Products").click();
    // All Products visible
    cy.url().should("include", "products");
    cy.contains("All Products").should("be.visible");

    // Search for a non-existent product
    const searchTerm = "Top";
    let addedProducts = [];

    cy.get('input[name="search"]').type(searchTerm);
    cy.get('input[name="search"]').should("have.value", searchTerm);
    cy.get('button[id="submit_search"]').click();

    cy.contains("Searched Products").should("be.visible");

    cy.get(".product-image-wrapper")
      .each(($el) => {
        const name = $el.find(".productinfo p").text().trim();

        if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
          addedProducts.push(name);
          cy.wrap($el).trigger("mouseover");
          cy.wrap($el).contains("Add to cart").click();
          cy.get(".btn-success")
            .should("be.visible", "Continue Shopping")
            .click();
        }
      })
      .then(() => {
        cy.contains("Cart").click();

        cy.verifyCartContains(addedProducts);
      });
    cy.registerUser(
      email,
      username,
      password,
      firstName,
      lastName,
      company,
      address1,
      address2,
      country,
      state,
      city,
      zipcode,
      mobile
    );
    cy.contains("Logout").click();

    cy.login(email, password);
    cy.contains("Logged in as " + username).should("be.visible");

    cy.contains("Cart").click();

    cy.verifyCartContains(addedProducts);
  });
});
