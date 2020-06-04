const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],

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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, "src/"),
            'store': path.resolve(__dirname, "src/store/"),
            'utils': path.resolve(__dirname, "src/utils/"),
            'hooks': path.resolve(__dirname, "src/hooks/"),
            'constants': path.resolve(__dirname, "src/constants/"),
            'mock': path.resolve(__dirname, "src/mock"),
            'public': path.resolve(__dirname, "public/"),
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
        }),
    ],

    devtool: 'cheap-eval-source-map',
}