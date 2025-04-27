const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // Ghi Allure nếu dùng
      return config;
    },
    projectId: 'g9c5cm', 
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Mặc định test file
    baseUrl: "https://www.automationexercise.com/",
    supportFile: "cypress/support/e2e.js", // Đường dẫn tới file hỗ trợ
    video: false, // Bật hoặc tắt quay video test
  },

  
});
