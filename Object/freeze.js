
var Kernel = require("../kernel.js");

Object.freeze = function freeze (O) {
  Kernel.Reflect.preventExtensions(O);
  var keys = Kernel.Reflect.getOwnPropertyNames(O);
  for (var i=0; i<keys.length; i++) {
    var descriptor = Kernel.Reflect.getOwnPropertyDescriptor(O, keys[i]);
    descriptor.configurable = false;
    descriptor.writable = false;
    Kernel.Reflect.defineProperty(O, keys[i], descriptor);
  }
  return O;
};
