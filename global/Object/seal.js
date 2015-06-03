
Object.freeze = function (O) {
  Kernel.Reflect.preventExtensions(O);
  var ks = Kernel.Reflect.ownKeys(O);
  for (var i=0; i<ks.length; i++) {
    var d = Kernel.getOwnPropertyDescriptor(O, ks[i]);
    d.configurable = false;
    Kernel.defineProperty(O, ks[i], d);
  }
  return O;
};
