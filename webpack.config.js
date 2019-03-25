const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            'file-loader?name=image/[name].[ext]',
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: false,
                        quality: 15
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: '15-20',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    }
                }
            },
        ]
        // &publicPath=images/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}