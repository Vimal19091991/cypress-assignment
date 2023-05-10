const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  projectId: 'ftemee',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
    env: {
      allureReuseAfterSpec: true
  }
    
    
  },
});
