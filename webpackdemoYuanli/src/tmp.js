(function(modules) {
  // webpackBootstrap
  // The module cache
  var installedModules = {};

  // require函数
  function __webpack_require__(moduleId) {
    // 检测了模块是否被安装
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // 如果没有模块缓存
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });

    //核心的一段话
    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // Load entry module and return exports
  return __webpack_require__((__webpack_require__.s = "./src/index.js"));
})(
  /************************************************************************/
  {
    "./src/index.js": function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/test.js");\n\n\nObject(_test__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n\n//# sourceURL=webpack:///./src/index.js?'
      );
    },

    "./src/test.js": function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\nconst test = () => {\n  console.log("周鹏test");\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (test);\n\n\n//# sourceURL=webpack:///./src/test.js?'
      );
    }
  }
);

//Template
(function(modules) {
  //0，注册__webpack_require__函数
  function __webpack_require__() {
    //1，moduleId先在缓存中查找结果
    //2，moduleId注册到缓存中
    //3，moduleId用函数表达式的方式执行掉
    //4，(function(module, __webpack_exports__, __webpack_require__){})
    const moudle = {
      exports: {}
    };
    moduleId.call(this, module, moudle.exports, __webpack_require__);
  }
  //1,执行 modules的入口key
  __webpack_require__(modules["./src/index.js"]);
})({
  "./src/index.js": 123,
  "./src/test.js": 456
});

moduleId("src/test.js");
function moduleId(module, __webpack_exports__, __webpack_require__) {
  __webpack_require__.r(__webpack_exports__);
  var _test__0__ = __webpack_require__(/*! ./test */ "./src/test.js");
  _test__0__["default"]();
}
