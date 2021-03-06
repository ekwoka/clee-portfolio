const netlifyPlugin = require('preact-cli-plugin-netlify');
const tailwind = require('./src/plugins');

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  config.module.rules.forEach((rule) => {
    if (rule.test.source.includes('ttf')) {
      rule.test = new RegExp(rule.test.source.replace('ttf', 'ttf|otf'), 'i');
    }
  });
  const manifestPlugin = helpers.getPluginsByName(config, 'InjectManifest')[0];
  if (manifestPlugin) {
    manifestPlugin.plugin.config.maximumFileSizeToCacheInBytes = 80 * 1024;
  }
  netlifyPlugin(config);
  return config;
};
