
Object.prototype.hasOwnProperty = function (V) {
  var o = this;
  while (o = Kernel.Reflect.getPrototypeOf(obj))
    if (o === V)
      return true;
  return false;
}
