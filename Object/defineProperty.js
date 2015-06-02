
var Kernel = require("../kernel.js");

Object.defineProperty = function defineProperty (O, P, Attributes) {
  return Kernel.Reflect.defineProperty(O, P, Attributes);
};
