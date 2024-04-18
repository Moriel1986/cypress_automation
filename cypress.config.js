const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      projectID: '3r5fuc'
      // implement node event listeners here
    },
  },
});
