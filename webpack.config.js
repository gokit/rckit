const webpack = require("webpack");
const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");

const rootDir = path.resolve(__dirname, ".");
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");

const hotReloader = new webpack.HotModuleReplacementPlugin();
const indexPage = new HtmlWebPackPlugin({
  template: path.join(srcDir, 'index.html'),
});

module.exports = {
  entry: path.join(srcDir, 'app.js'),
  output: {
    path: distDir,
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader:  "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
            },
          },
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    indexPage,
    hotReloader,
  ],
  devServer: {
    contentBase: distDir,
    hot: true,
  }
};
