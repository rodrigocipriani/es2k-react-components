const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  components: 'src/**/*.jsx',
  serverHost: 'localhost',
  styleguideDir: 'docs',
  title: 'ES2k React Components',
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.s?css$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader?precision=10'],
        },
      ],
    },
    plugins: [
      new OpenBrowserPlugin({ url: 'http://localhost:6060' })
    ]
  },
};

