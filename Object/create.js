
var Kernel = require("../kernel.js");

Object.create = function create (O, Properties) {
  var o = {};
  Kernel.Reflect.setPrototype(o, O);
  for (var k in Properties)
    Kernel.Reflect.defineProperty(o, k, Properties[k]);
  return o;
};
