const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],

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
    plugins:
        [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html",
                favicon: "./src/assets/redux.png",
            })],
    devServer: {
        port: 2020
    }
};