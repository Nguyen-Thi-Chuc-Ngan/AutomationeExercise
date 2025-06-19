const userInfo = require("../fixtures/userInfo");

describe("Verify Address in Checkout", () => {
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

  it("Test Case 23: Verify address details in checkout page", () => {
    cy.visitHomePage();

    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!").should("be.visible");
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

    cy.contains("Cart").click();
    cy.get("body").should("be.visible");
    cy.contains("Proceed To Checkout").click();
    cy.verifyAddressDetails();

    cy.verifyAddressInvoice();

    cy.deleteAccount();
  });
});
