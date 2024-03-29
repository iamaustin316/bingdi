const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/index_bundle.[hash].js'
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
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff?name=fonts/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.pdf$/,
        loader: "file-loader?name=pdf/[name].[ext]"
      },
      {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            'file-loader?name=images/[name].[hash].[ext]',
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: false,
                        quality: 60
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: '55-60',
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