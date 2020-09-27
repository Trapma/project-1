const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@color": path.resolve(__dirname, "src/desktop/common-blocks/color"),
      "@text": path.resolve(__dirname, "src/desktop/common-blocks/text"),
    },
  },
  devServer: {
    port: 4000,
    // hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/assets/"),
    //       to: path.resolve(__dirname, "dist/assets/"),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // hmr: isDev,
              // reloadAll: true,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // hmr: isDev,
              // reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "image",
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "font",
        },
      },
    ],
  },
};
