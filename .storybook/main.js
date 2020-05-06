const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.ts"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-notes"],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules]
      }
    };
  }
};
