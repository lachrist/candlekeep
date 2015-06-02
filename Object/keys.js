
var Kernel = require("./kernel.js");

Object.keys = function (object) {
  var ks1 = Kernel.Reflect.ownKeys(object);
  var ks2 = []
  for (var i=0; i<ks1.length; i++)
    if (Kernel.Reflect.getOwnPropertyDescriptor(object, ks1[i]).enumerable)
      ks2[ks2.length-1] = ks1[i];
  return ks2;
}
