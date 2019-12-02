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

let template = "";
(function() {})({});
