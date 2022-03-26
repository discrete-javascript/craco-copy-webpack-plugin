const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    pluginOptions = { patterns: [] },
  }) => {
    webpackConfig.plugins.push(new CopyWebpackPlugin(pluginOptions));
    return webpackConfig;
  },
};
