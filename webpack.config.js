const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outputDirectory = 'dist';
var ImageminPlugin = require('imagemin-webpack-plugin').default
const glob = require('glob');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg|jpg|otf|TTF|gif)$/,
      loader: 'url-loader?limit=100000'
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': `http://localhost:${process.env.SEVER_PORT||8080}`
    }
  },
  plugins: [
    new ImageminPlugin({
      externalImages: {
        context: 'src/client', // Important! This tells the plugin where to "base" the paths at
        sources: glob.sync('src/client/assets/**/*.png'),
        destination: 'src/public/assets',
        fileName: '[path][name].[ext]' // (filePath) => filePath.replace('jpg', 'webp') is also possible
      }
    }),
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin([
      { from: 'src/client/assets', to: 'assets' }
    ]),
  ]
};