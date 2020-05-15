const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
  distDir: 'dist'
}