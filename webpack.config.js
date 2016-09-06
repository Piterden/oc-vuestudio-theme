const path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  _src = 'assets',
  _dist = 'build'

// Export the webpack configuration
module.exports = {
  entry: {
    vendor: ['jquery'],
    main: '../../../assets/main.js'
  },

  // Output controls the settings for file generation.
  output: {
    publicPath: _dist+'/',
    path: path.join(__dirname, _dist + '/js/'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },

  resolveLoader: {
    root: [path.join(__dirname, 'node_modules')]
  },

  resolve: {
    root: path.join(__dirname, _src + '/'),
    extensions: ['', '.js' , '.scss' , '.vue']
  },

  // Module settings.
  module: {
    loaders: [{
      test: /\.vue$/, // a regex for matching all files that end in `.vue`
      loader: 'vue' // loader to use for matched files
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }, {
      test: /\.css$/,
      loaders: [
        ExtractTextPlugin.loader({
          extract: true,
          omit: 1
        }),
        'style',
        'css'
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        ExtractTextPlugin.loader({
          extract: true,
          omit: 1
        }),
        'style',
        'css',
        'sass'
      ]
    }]
  },

  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ru/)
  ]
}
