module.exports = {
  context: __dirname + "/src",
  entry: {
    jsx: "./index.jsx",
    html: "./index.html",
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
//      { test: /\.css$/, loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
