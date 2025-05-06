const path = require('path');
module.exports = {
    mode: 'development',
    context: `${__dirname}/src`,
    entry: {
      'likeScratchLib': path.join(__dirname, '/src', 'likeScratchLib.js')
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'main.js', //まとめた結果出力されるファイル名
      library:{
        type: "module",
      }
    },
    experiments: {
      outputModule: true,
    },
    resolve: {
      extensions: ['.js']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\src\/*\.js$/,
          loader: 'exports-loader',
          options: {
            exports: 'playGround',
          }
        }
      ]
    }
  }