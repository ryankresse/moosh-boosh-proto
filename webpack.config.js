var path = require('path');
module.exports = {
   devtool: 'eval-source-map',
  entry: './root.js',

  output: {
  
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}

