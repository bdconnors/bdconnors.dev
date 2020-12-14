
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
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
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
          }

      ]
   },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};