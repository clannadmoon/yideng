import { sync } from "./components/sync/index";

import(/* webpackChunkName: "async-test" */ "./components/async/index").then(
  _ => {
    _.default.init();
  }
);

console.log("Hello world");
sync();
