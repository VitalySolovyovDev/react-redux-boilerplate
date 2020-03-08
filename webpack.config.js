const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
    mode: "development",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devtool: "source-map",
    entry: {
        "bundle": "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `${__dirname}/src/fonts/[name].[ext]`
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: `${__dirname}/dist/`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"]
        }),
        new HtmlWebpackPlugin({
            title: "App build development",
            filename: `${__dirname}/dist/index.html`,
            template: `${__dirname}/src/index.html`
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        historyApiFallback: true
    }
};
