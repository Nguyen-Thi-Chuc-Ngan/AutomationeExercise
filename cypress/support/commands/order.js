import "cypress-wait-until";
Cypress.Commands.add("verifyAddressDetails", () => {
  cy.get("#address_delivery")
    .first()
    .within(() => {
      cy.contains("Mrs. John Doe");
      cy.contains("Example Inc.");
      cy.contains("123 Main St");
      cy.contains("Apt 4B");
      cy.contains("Los Angeles California 90001");
      cy.contains("India");
      cy.contains("1234567890");
    });
});

Cypress.Commands.add("verifyAddressInvoice", () => {
  cy.get("#address_invoice")
    .first()
    .within(() => {
      cy.contains("Mrs. John Doe");
      cy.contains("Example Inc.");
      cy.contains("123 Main St");
      cy.contains("Apt 4B");
      cy.contains("Los Angeles California 90001");
      cy.contains("India");
      cy.contains("1234567890");
    });
});

Cypress.Commands.add("verifyReviewYourOrder", () => {
  cy.get("#product-1").should("have.length", 1);
  cy.get("#product-1 .cart_price p").should("have.text", "Rs. 500");
  cy.get("#product-1 .cart_quantity .disabled").should("have.text", "1");
  cy.get("#product-1 .cart_total_price").should("have.text", "Rs. 500");
});

Cypress.Commands.add(
  "fillOrderMessageAndPlaceOrder",
  (message = "This is a test order.") => {
    cy.get('textarea[name="message"]').type(message);
    cy.get('textarea[name="message"]').should("have.value", message);

    cy.contains("Place Order").click();
  }
);

Cypress.Commands.add(
  "fillCardInfoAndRedirect",
  (
    name = "John Doe",
    cardNumber = "4111111111111111",
    cvc = "123",
    month = "12",
    year = "2025"
  ) => {
    cy.get('input[data-qa="name-on-card"]')
      .type(name)
      .should("have.value", name);
    cy.get('input[data-qa="card-number"]')
      .type(cardNumber)
      .should("have.value", cardNumber);
    cy.get('input[data-qa="cvc"]').type(cvc).should("have.value", cvc);
    cy.get('input[data-qa="expiry-month"]')
      .type(month)
      .should("have.value", month);
    cy.get('input[data-qa="expiry-year"]')
      .type(year)
      .should("have.value", year);

    cy.get('button[data-qa="pay-button"]').click();

    cy.wait(500); // Đợi xử lý

    // Lấy URL và chuyển đến trang /payment_done/xxx
    cy.window().then((win) => {
      const currentUrl = win.location.href;
      cy.log("URL hiện tại:", currentUrl);

      const match = currentUrl.match(/\/payment_done\/\d+/);
      if (match) {
        cy.visit(match[0]);
      }
    });
  }
);

Cypress.Commands.add("placeOrderAndVerifyBeforeRedirect", () => {
  cy.contains("Cart").click();
  cy.contains("Proceed To Checkout").click();

  cy.verifyAddressDetails();
  cy.verifyReviewYourOrder();

  // Lấy tổng tiền từ dòng "Total Amount"
  return cy.get("tr")
    .last()
    .find("p.cart_total_price")
    .invoke("text")
    .then((text) => {
      const match = text.match(/\d+/);
      const totalAmount = match ? parseInt(match[0]) : 0;

      // Sau khi lấy được total, ta thực hiện các hành động khác rồi trả về totalAmount sau cùng
      return cy.wrap(totalAmount).as("orderTotal"); // lưu lại nếu cần dùng sau
    })
    .then(() => {
      // các thao tác phải nằm ngoài then đầu tiên
      cy.fillOrderMessageAndPlaceOrder();
      cy.wait(500);
      cy.fillCardInfoAndRedirect();
      // Trả lại giá trị từ alias
      return cy.get("@orderTotal");
    });
});
