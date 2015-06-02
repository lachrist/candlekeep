
var Kernel = require("../kernel.js");

Object.defineProperties = function defineProperties (O, Properties) {
  for (var k in Properties)
    Kernel.Reflect.defineProperty(O, k, Properties[k]);
  return O;
};
