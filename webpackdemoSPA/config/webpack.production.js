//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

const os = require("os");
module.exports = {
  output: {
    filename: "scripts/[name].[hash:5].bundles.js"
    //publicPath: "/"
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   //1,默认多核编译，现有核数减1
      //   //parallel: true
      //   parallel: os.cpus().length //使用所有核压缩
      // }),
      new ParallelUglifyPlugin({
        // Optional regex, or array of regex to match file against. Only matching files get minified.
        // Defaults to /.js$/, any file ending in .js.
        exclude: /\.min\.js$/,
        workerCount: os.cpus().length, //使用所有核压缩

        // uglifyJS: {
        //   // These pass straight through to uglify-js@3.
        //   // Cannot be used with uglifyES.
        //   // Defaults to {} if not neither uglifyJS or uglifyES are provided.
        //   // You should use this option if you need to ensure es5 support. uglify-js will produce an error message
        //   // if it comes across any es6 code that it can't parse.
        // },
        uglifyES: {
          output: {
            beautify: false,
            comments: false
          },
          compress: {
            warnings: false,
            drop_console: true,
            collapse_vars: true
          }
        }
      })
    ]
  }
};
