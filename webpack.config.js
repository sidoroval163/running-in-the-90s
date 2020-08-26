const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./source/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",

  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"],
        }),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({ filename: "style.css", allChunks: true }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./source/index.html",
      filename: "index.html",
    }),

    new CopyPlugin([
      {
        from: "./source/images",
        to: "./images"
      },
      {
        from: "./source/assets",
        to: "./assets"
      },
      {
        from: "./source/font",
        to: "./font"
      },
      {
        from: "./source/music",
        to: "./music"
      }
    ]),
  ],
  devServer: {  // configuration for webpack-dev-server
    contentBase: './source',  //source of static assets
    port: 7700, // port to run dev-server
  }
};
