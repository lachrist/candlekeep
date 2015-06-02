
var Kernel = require("../kernel.js");

Object.preventExtensions = function preventExtensions (O) {
  return Kernel.Reflect.preventExtensions(O);
};
