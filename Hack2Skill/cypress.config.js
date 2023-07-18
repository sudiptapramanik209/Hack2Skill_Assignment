const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    specPattern: 'cypress/integration/hack2skill/*.js'
  },
  chromeWebSecurity:false
});
