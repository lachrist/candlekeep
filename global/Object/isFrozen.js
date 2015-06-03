
Object.isFrozen = function isFrozen (O) {
  if (Kernel.Reflect.isExtensible(O))
    return false;
  var ks = Kernel.Reflect.ownKeys(O);
  for (var i=0; i<ks.length; i++) {
    var d = Kernel.Reflect.getOwnPropertyDescriptor(O, ks[i]);
    if (d.configurable)
      return false;
    if (d.writable)
      return false;
  }
  return true;
}
