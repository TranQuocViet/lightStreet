var path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  name: 'app',
  target: 'web',
  entry: {
    app: [
      './src/index.js'
      // './src/styles.sass'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
      modules: [
        "node_modules",
        __dirname + "/src"
      ]
    },
  module: {
    rules: [
      {
        test: [/\.sass$/, /\.css$/],
        use: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader'], fallback: "style-loader"})
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test:  /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|)(\?v=\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.tpl.html$/,
        loader: 'raw-loader',
      },
      {
        test: /index.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ]
  },
  plugins: [
      new ExtractTextPlugin({ filename: "./styles.css", allChunks: true })
    ]
}
