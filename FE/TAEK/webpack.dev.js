const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                },
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
        }),
        new Dotenv({
            path: path.resolve(__dirname, "./.env.development"),
        }),
    ],
}