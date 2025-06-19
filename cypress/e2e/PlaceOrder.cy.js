const userInfo = require("../fixtures/userInfo");

describe("Place Order", () => {
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

  it("Test Case 14: Place Order: Register while Checkout", () => {
    cy.visitHomePage();

    // Click on Products
    cy.addProductFristToCart();
    cy.contains("Cart").click();

    cy.get("body").should("be.visible");

    cy.contains("Proceed To Checkout").click();

    cy.get('.modal-body a[href="/login"]').should("be.visible").click();
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

    cy.placeOrderAndVerifyBeforeRedirect();
    cy.deleteAccount();
  });

  it("Test Case 15: Place Order: Register before Checkout", () => {
    cy.visitHomePage();

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

    cy.addProductFristToCart();
    cy.placeOrderAndVerifyBeforeRedirect();
    cy.deleteAccount();
  });

  it("Test Case 16: Place Order: Login before Checkout", () => {
    cy.visitHomePage();
   
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

    cy.contains(" Logged in as " + username).should("be.visible");

    cy.addProductFristToCart();
    cy.placeOrderAndVerifyBeforeRedirect();

    cy.deleteAccount();
  });
});
