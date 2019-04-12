const WorkboxWebpackPligin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPligin.InjectManifest({
        swSrc: './src/sw.ts',
        swDest: 'service-worker.js',
      });
    }
    return plugin;
  });
  return config;
}