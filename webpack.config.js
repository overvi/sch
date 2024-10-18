const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/assets/ts/index.ts",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output CSS file name
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "./src/assets/css"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", // Optional: for PostCSS processing
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      `...`, // Keep the existing JS minimizers (Terser in Webpack 5)
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },
};
