const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/*.cy.js',
     baseUrl: "https://staging-login.nurtureme.ai/",
  },
  defaultCommandTimeout: 6000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  
});
