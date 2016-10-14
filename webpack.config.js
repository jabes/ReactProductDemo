const path = require('path');
const webpack = require('webpack');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const publicPath = path.resolve(__dirname, 'public');

const excludePaths = [
  nodeModulesPath,
  distPath,
  publicPath
];

module.exports = {
  entry: [
    path.resolve(srcPath, 'index.js')
  ],
  output: {
    path: path.resolve(distPath),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', exclude: excludePaths},
    ],
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: excludePaths},
      {test: /\.css$/, loader: 'style!css!postcss', exclude: excludePaths},
      {test: /\.scss$/, loader: 'style!css!postcss!sass', exclude: excludePaths}
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [srcPath]
  },
  babel: {
    presets: ['es2015', 'react'],
    plugins: ['transform-runtime']
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
    contentBase: publicPath
  }
};
