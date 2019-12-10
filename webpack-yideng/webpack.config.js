module.export = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "code-metrics-loader",
            options: {
              //配置错误限制
              errorLimit: 5
            }
          }
        ]
      }
    ]
  }
};
