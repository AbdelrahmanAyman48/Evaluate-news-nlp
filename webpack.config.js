// const path = require('path')
// const webpack = require('webpack')
// const HtmlWebPackPlugin = require("html-webpack-plugin")
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const dotenv = require('dotenv-webpack');
// // dotenv.config();

// // Now you can access environment variables using process.env
// module.exports = {
//   entry: './src/client/index.js',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: '[name].[contenthash].js',
//     filename: 'main.js',
//   },
//   module: {
//        rules: [
//           {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader",
//           },
//           {
//                 test: /\.html$/,
//                 use: [{ loader: "html-loader"}],
//           },
//           {
//             test: /\.(sa|sc|c)ss$/,
//             use: [
//               devMode ? "style-loader" : MiniCssExtractPlugin.loader,
//               "css-loader",
//               "postcss-loader",
//               "sass-loader",
//             ]
//           },

//       ]
//  },
//   plugins: [
//     new HtmlWebPackPlugin({
//            template: "./src/html/index.html",
//            filename: "./index.html",
//     }),
//     new dotenv(),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "[name].css",
//       chunkFilename: "[id].css",
//     }),

//   ],
//   optimization: {
//     minimize: true,
//     minimizer: [
//       '...', // Preserve default minimizers
//       new CssMinimizerPlugin(),
//     ],
//   },
// }