Cypress.Commands.add("visitHomePage", () => {
  cy.visit("https://www.automationexercise.com/");
  cy.url().should("include", "automationexercise.com");
  cy.get("body").should("be.visible");
});

Cypress.Commands.add("visitProductPage", () => {
  cy.contains("Products").should("be.visible").click();
  cy.url().should("include", "/products");
  cy.contains("All Products").should("be.visible");
});
