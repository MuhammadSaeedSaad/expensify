const loader = require("css-loader");
const path = require("path");

module.exports = (env) => {
    const isProduction = env === "production";
    console.log(isProduction);
    
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }]
        },
        devtool: "eval-cheap-module-source-map",
        devServer: {
            static: {
                directory: path.join(__dirname, "public"),   
            },
            historyApiFallback: true,
            client: {
                logging: "none",
                overlay: {
                    warnings: false
                }
            }
        },
        stats: {
            warnings: false
        }
    };
}