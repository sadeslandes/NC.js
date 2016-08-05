var path                =      require("path"),
    webpack             =   require("webpack"),
    ExtractTextPlugin   = require("extract-text-webpack-plugin");
module.exports = { 
  context: process.cwd(),
  entry: {
    dependencies:[
     'async',
     'bootstrap',
     'body-parser',
     'commander',
     'cookie-parser',
     'errorhandler',
     'express',
     'express-session',
     'jade',
     'jquery',
     'joi',
     'jsonwebtoken',
     'jstree',
     'jwt-decode',
     'lodash',
     'method-override',
     'morgan',
     'node-sass',
     'pug',
     'qs',
     'query-string',
     'rc-menu',
     'react', 
     'react-dom', 
     'react-tooltip',
     'react-treebeard',
     'request',
     'serve-favicon',
     'serve-static',
     'socket.io',
     'socket.io-client',
     'socket.io-express-session',
     'speakeasy',
     'superagent',
     'three',
     'webpack-sources',
     'winston'
    ],
    devdepends: [
      'babel',
      'babel-core',
      'babel-loader',
      'babel-plugin-transform-react-jsx',
      'babel-preset-es2015',
      'babel-preset-react',
      'css-loader',
      'bootstrap-webpack',
      'exports-loader',
      'file-loader',
      'extract-text-webpack-plugin',
      'imports-loader',
      'mocha',
      'less-loader',
      'node-markdown',
      'uglify-js',
      'uglify-loader',
      'url-loader',
      'webpack-glsl-loader',
      'webpack',
      'webpack-config',
      'style-loader',
      'sass-loader',
      'less'

    ]
  }, 
 
 output: { 
    filename: '[name].dll.js', 
    path: "", 
    library: '[name]', 
  }, 
  
  plugins: [ 
    new webpack.DllPlugin({ 
      name: '[name]', 
      path:  '[name].json'
    })
  ]
};