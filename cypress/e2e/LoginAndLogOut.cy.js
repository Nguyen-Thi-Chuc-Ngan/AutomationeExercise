const userInfo = require("../fixtures/userInfo");

describe("Login and Logout", () => {
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

  before(() => {
    cy.visitHomePage();
    cy.registerUser(email, username, password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile);
    cy.contains("Logout").click();
  });

  it("Test Case 2: Login User with correct email and password", () => {
    // Lanch browser
    cy.login(email, password);

    cy.contains(" Logged in as " + username).should("be.visible");
    cy.deleteAccount();
  });

  it("Test Case 3: Login User with incorrect email and password", () => {
    cy.visitHomePage();
    cy.registerUser(email, username, password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile);
    cy.contains("Logout").click();
    cy.login("wrong_" + email, password);
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });

  it("Test Case 4: Logout User", () => {
    cy.visitHomePage();
    cy.login(email, password);

    cy.contains(" Logged in as " + username).should("be.visible");

    cy.contains("Logout").click();
    cy.url().should("include", "/login");
  });
});
