
var Kernel = require("./kernel.js");

Object.isFrozen = function isFrozen (O) {
  if (Kernel.Reflect.isExtensible(O))
    return false;
  var ks = Kernel.Reflect.ownKeys(O);
  for (var i=0; i<ks.length; i++)
    if (Kernel.Reflect.getOwnPropertyDescriptor(O, ks[i]).configurable)
      return false;
  return true;
}
