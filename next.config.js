const withImages = require('next-images');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withSass, withCss, withImages], {
  env: {
    API: 'http://localhost:5000/api',
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    );

    return config;
  }
});
