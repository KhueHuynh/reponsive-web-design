var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import './src/css/main.scss';

module.exports = {
    mode: 'development',
    target: 'web',
    entry: ['./src/main.js', './src/css/main.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            // Load a custom template (lodash by default see the FAQ for details)
            template: 'index.html'
          }),
          new ExtractTextPlugin({
            filename: 'dis/[name].bundle.css',
            allChunks: false,
          })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:[
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    }
  };
  