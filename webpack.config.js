const webpack = require("webpack");
const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");

const rootDir = path.resolve(__dirname, ".");
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");

const htmlPlugin = new HtmlWebPackPlugin({
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
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
      htmlPlugin,
  ],
  devServer: {
    contentBase: distDir,
    hot: true,
  }
};
