// Webpack. For more detail check Pluralsight cource [WebPack Fundamentals]()
/*
1. Bundling of files
2. Perfomance
3. 
*/
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';



export default {
  debug: true,
  devtool: 'inline-source-map', //Code Quality, performance
  noInfo: false, //Show information
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',   //Web or Node or Electron
  output: {        //Webpack doesn.t generate any files. It will serve builds from memory
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that include reference to bundle.js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true //Inject script tags dynamically
    })
  ], //hot-reloading, coading styles, linting .etc
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}