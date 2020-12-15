
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8001,
        historyApiFallback: true
    },
    module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
         },
         {
            test: /\.css?$/,
            use:['style-loader','css-loader']
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ]
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          }

      ]
   },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};