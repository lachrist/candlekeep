
var Kernel = require("../kernel.js");

Object.getPrototypeOf = function getPrototypeOf (O) {
  return Kernel.Reflect.getPrototypeOf(O);
};
