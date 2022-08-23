const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '78jhdb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
