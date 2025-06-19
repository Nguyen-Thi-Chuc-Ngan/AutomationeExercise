const userInfo = require("../fixtures/userInfo");

describe("Download Invoice", () => {
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
  it("Test Case 24: Download Invoice after purchase order", () => {
    cy.visitHomePage();

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

    cy.contains("Cart").click();
    cy.get("body").should("be.visible");
    cy.contains("Proceed To Checkout").click();

    cy.placeOrderAndVerifyBeforeRedirect().then((totalAmount) => {
      cy.contains("Download Invoice")
        .should("have.attr", "href")
        .then((href) => {
          const fullUrl = `https://automationexercise.com${href}`;
          cy.downloadFile(fullUrl, "cypress/downloads", "invoice.txt");

          cy.readFile("cypress/downloads/invoice.txt").should(
            "contain",
            `Hi ${firstName} ${lastName}, Your total purchase amount is ${totalAmount}. Thank you`
          );
        });
    });
    cy.deleteAccount();
  });
});
