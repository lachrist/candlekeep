
var Kernel = require("../kernel.js");

Object.isExtensible = function isExtensible (O) {
  return Kernel.Reflect.isExtensible(O);
};
