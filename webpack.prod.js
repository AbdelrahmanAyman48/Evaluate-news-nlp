const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv-webpack');

// Load environment variables from .env file
// dotenv.config();

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        filename: 'main.js',
        // clean: true, // Cleans old files in /dist
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader"}],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"), // Use the modern Dart Sass API
                    },
                }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
        new dotenv(
            {path: './.env'}
        ),
        new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename: "[name].css",
              chunkFilename: "[id].[contenthash].css",
            }),
        new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
            }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', // Splits vendor code into separate chunks
        },
        minimize: true,
            minimizer: [
              '...', // 
              new CssMinimizerPlugin(),new TerserPlugin({})
            ],
    },
    // devServer: {
    //     port: 3000,
    //     open:true,
    //     allowedHosts: 'all'
    // }
}
