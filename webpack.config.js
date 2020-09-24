const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
      new HTMLWebpackPlugin({
          template: "./index.html"
      }),
      new CleanWebpackPlugin(),
    //   new CopyPlugin()
  ]
};
