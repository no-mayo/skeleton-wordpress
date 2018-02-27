const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    main: "./scripts/index.js"
  },
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname)
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader", // backup loader when not building .css file
          use: "css-loader!postcss-loader!sass-loader" // loaders to preprocess CSS
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [autoprefixer]
      }
    })
  ]
};
