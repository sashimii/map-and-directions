const path = require('path');

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "js/app.[name].js",
    path: __dirname + "/dist/"
  },
  mode: "production",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      { test: /\.jsx?$/, exclude: /localforage/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader},
          { loader: "css-loader" },   // translates CSS into CommonJS
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",  // compiles Sass to CSS
            options: {
              // includePaths: ["node_modules/foundation-sites/scss"]
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },   // translates CSS into CommonJS
          { loader: "postcss-loader" },
        ]
      },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.[name].css"
    }),
  ]
};