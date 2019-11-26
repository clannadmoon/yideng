import { isArray } from "lodash-es";
import item from "./sync.css";
import help from "../common/help";
const sync = function() {
  fetch("/api/test")
    .then(response => response.json())
    .then(data => {
      console.log("fetch的结果", data);
    });
};
const isArrayFun = function(args) {
  console.log(isArray(args));
};
export { sync, isArrayFun };
