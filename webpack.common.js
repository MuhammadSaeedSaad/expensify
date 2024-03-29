const loader = require("css-loader");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { sourceMap: true }}, { loader: "sass-loader", options: { sourceMap: true }} ] 
        }]
    },
    plugins: [new MiniCssExtractPlugin()],
    stats: {
        warnings: false
    }
};