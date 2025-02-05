const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const dotenv = require('dotenv-webpack');

// Load environment variables from .env file
// dotenv.config();

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'Client'
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
        new dotenv(
            {path: './.env'}
        ),
        new MiniCssExtractPlugin({
              // Options similar to the samoptions in webpackOptions.output
              // both options are optional
              filename: "[name].[contenthashcss].css",
              chunkFilename: "[id].[contenthashcss].css",
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
        new BundleAnalyzerPlugin(),

    ],
    devServer: {
        port: 3000,
        open:true,
        allowedHosts: 'all',
        hot: true
    }
}
