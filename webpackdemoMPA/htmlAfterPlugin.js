//把html
const pluginName = "HtmlAfterPlugin";

class HtmlAfterPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      console.log("webpack 构建过程开始！");
      //html-webpack-plugin-before-html-processing
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        pluginName,
        htmlPluginData => {
          const result = htmlPluginData.assets.js;
          let _html = htmlPluginData.html;
          _html = _html.replace(
            "<!--injectjs-->",
            `<script src="/${result}"></script>`
          );
          htmlPluginData.html = _html;
        }
      );
    });
  }
}

module.exports = HtmlAfterPlugin;
