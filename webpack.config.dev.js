'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = {
  mode: 'development',

  entry: [
    './src/main.js'
  ],
  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|mp4)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // assetModuleFilename: '[name][ext]',
      inject: true
    }),

    new VuetifyPlugin({ autoImport: true }),

  ]
}