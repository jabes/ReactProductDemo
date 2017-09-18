const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'public');

const excludePaths = [
  nodeModulesPath,
  distPath,
];

let config = {
  entry: [
    path.resolve(srcPath, 'index')
  ],
  output: {
    path: distPath,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint'},
    ],
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: excludePaths},
      {test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.scss$/, loader: 'style!css!postcss!sass'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true'}
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [srcPath]
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ];
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    contentBase: distPath
  }
};

if (!isDev) {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
