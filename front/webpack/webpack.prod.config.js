/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  entry: {
    index: [
      path.resolve(__dirname, '../src/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk_[id].js',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Containers: path.resolve(__dirname, '../src/containers'),
    },
  },
};
