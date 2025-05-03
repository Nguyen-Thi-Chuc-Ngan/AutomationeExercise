const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs'); 

module.exports = defineConfig({
  projectId: 'g9c5cm',
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Kiểm tra xem có thất bại hoặc thử lại nào không
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          );
          if (!failures) {
            // Nếu không có thất bại hoặc thử lại, xóa video
            fs.unlinkSync(results.video);
          }
        }
      });
      
      // Ghi Allure nếu dùng
      allureWriter(on, config);
      
      return config;
    },

    projectId: "g9c5cm", // Thay đổi ID dự án của bạn
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Mặc định test file
    baseUrl: "https://www.automationexercise.com/", // Địa chỉ của ứng dụng
    supportFile: "cypress/support/e2e.js", // Đường dẫn tới file hỗ trợ
    screenshotOnRunFailure: true, // Mặc định là true
    videoCompression: 32, // Có thể thay đổi thành 0-100 để điều chỉnh mức độ nén
    video: true, // Bật hoặc tắt quay video test
  },
})