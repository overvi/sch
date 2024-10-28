const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    base: "./src/assets/ts/main.ts",
    main: "./src/assets/ts/index.ts",
    darkMode: "./src/assets/ts/darkMode.ts",
    filters: "./src/assets/ts/filters.ts",
    schools: "./src/assets/ts/schools.ts",
    schoolDetails: "./src/assets/ts/schoolDetails.ts",
    about: "./src/assets/ts/about.ts",
    profile: "./src/assets/ts/profile.ts",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["base", "main", "darkMode", "filters"],
    }),
    new HtmlWebpackPlugin({
      template: "./booking/index.html",
      filename: "booking/index.html",
      chunks: ["base", "darkMode"],
    }),
    new HtmlWebpackPlugin({
      template: "./schools/index.html",
      filename: "schools/index.html",
      chunks: ["base", "darkMode", "filters", "schools"],
    }),
    new HtmlWebpackPlugin({
      template: "./schools/1/index.html",
      filename: "schools/1/index.html",
      chunks: ["base", "darkMode", "schoolDetails"],
    }),
    new HtmlWebpackPlugin({
      template: "./about/index.html",
      filename: "about/index.html",
      chunks: ["base", "darkMode", "about"],
    }),
    new HtmlWebpackPlugin({
      template: "./profile/index.html",
      filename: "profile/index.html",
      chunks: ["base", "darkMode", "profile"],
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
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Font file extensions
        type: "asset/resource", // Use built-in asset/resource for Webpack 5
        generator: {
          filename: "fonts/[name][ext]", // Output directory for fonts
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "./src/assets/css"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output directory before building
  },

  optimization: {
    minimizer: [
      `...`, // Keep existing JS minimizers
      new CssMinimizerPlugin(),
    ],
  },
  mode: "development",
};
