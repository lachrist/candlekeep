
var Kernel = require("../kernel.js");

Object.setPrototypeOf = function setPrototypeOf (O, proto) {
  return Kernel.Reflect.setPrototypeOf(O, proto);
};
