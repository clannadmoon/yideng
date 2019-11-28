const path = require("path");
const glob = require("globs");
const PurifyCSSPlugin = require("purifycss-webpack");
const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin")
  .default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const argv = require("yargs-parser")(process.argv.slice(2));
const merge = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = _mode == "production" ? true : false;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

var WebpackBuildNotifierPlugin = require("webpack-build-notifier");

var ProgressBarPlugin = require("progress-bar-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");
const setTitle = require("node-bash-title");
setTitle("🍻  Server");
const setItem2Badge = require("set-iterm2-badge");
setItem2Badge("周鹏开发环境");

var ManifestPlugin = require("webpack-manifest-plugin");
const loading = {
  html: "加载中"
};
webpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPatch: "../"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]"
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: "3000",
    hot: true,
    before(app) {
      app.get("/api/test", (req, res) => {
        res.json({
          code: 200,
          message: "Hello World"
        });
      });
    }
  },
  optimization: {
    // async 异步(import()语法) initial(同步import xxx from 'xxx') all(所有)
    splitChunks: {
      chunks: "initial",
      name: "common",
      minChunks: 1,
      maxInitialRequests: 5,
      minSize: 0,

      cacheGroups: {
        //commons: "initial",
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
  plugins: [
    new ManifestPlugin(),
    new DashboardPlugin(),
    new ProgressBarPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "wepack SPA",
      logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    }),
    //new WebpackDeepScopeAnalysisPlugin(),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: _modeflag ? "styles/[name].[hash:5].css" : "styles/[name].css",
      chunkFilename: _modeflag ? "styles/[id].[hash:5].css" : "styles/[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      loading: loading
    }),
    new CleanWebpackPlugin(),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, "./dist/*.html"))
    })
  ]
};

module.exports = smp.wrap(merge(_mergeConfig, webpackConfig));
