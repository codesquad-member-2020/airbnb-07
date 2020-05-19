const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.js?$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader",
                options: {
                    publicPath: "./",
                    name: "[name].[ext]?[hash]",
                },
            },
        ],
    },

    resolve: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
        }),
        new Dotenv({
            path: path.resolve(__dirname, "./.env.production"),
        }),
    ],
}