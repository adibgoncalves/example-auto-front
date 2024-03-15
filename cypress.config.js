const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { initPlugin } = require("@frsource/cypress-plugin-visual-regression-diff/plugins");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    setupNodeEvents(on, config) {
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({plugins: [createEsbuildPlugin.default(config)]}));
      return config;
    },
  },
});