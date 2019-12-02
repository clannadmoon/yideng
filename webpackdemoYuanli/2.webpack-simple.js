/**
 * webpack主运行流程
 * 1，compiler(Tapable)-->Compilation(Tabpable)-->Chunk-->
 * 2，Module-->runloaders-->Dependency(AST)-->Template
 */

//Chunk-->Dependency-->Template
const fs = require("fs");
let input = "./src/index.js";
let output = "./dist/main.js";
const ejs = require("ejs");
const getIntry = fs.readFileSync(input, "utf-8");
const contAry = [];
let dealIntry = getIntry.replace(
  /(require)\(['"](.+?)['"]\)/g,
  ($1, $2, $3, $4) => {
    console.log($3);
    let cont = fs.readFileSync($3, "utf-8");
    contAry.push(cont);
    return ($2 = `__webpack_require__(${contAry.length})`);
  }
);


let template = (function(modules) {
  function __webpack_require__(moduleId) {
    const module = {
      exports: {}
    };
    //函数体
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
      return module.exports;
  }
    return __webpack_require__(0)
})([function (module.exports,__webpack_require__) {
    <%- getIntry %>
}]);

// let result = ejs.render(template,{getIntry})
