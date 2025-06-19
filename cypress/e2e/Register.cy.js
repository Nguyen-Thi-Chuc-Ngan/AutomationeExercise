const userInfo = require("../fixtures/userInfo");

describe("Register", () => {
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

  it("Test Case 1: Register User", () => {
    // Lanch browser
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

    cy.deleteAccount()
  });

  it("Test Case 5: Register User with existing email", () => {
    // Lanch browser
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

    cy.contains('Logout').click();

    //Click Signup / LoginLogin
    cy.contains("Signup / Login").click();
    // New User Signup! visiblevisible
    cy.contains("New User Signup!").should("be.visible");

    cy.get('input[data-qa="signup-name"]').type(username);
    cy.get('input[data-qa="signup-email"]').type(email);

    cy.get('button[data-qa="signup-button"]').click();

    cy.contains("Email Address already exist!").should("be.visible");
  });
});