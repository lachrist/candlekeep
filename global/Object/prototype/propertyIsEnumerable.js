
Object.prototype.hasOwnProperty = function (V) {
  var d = Kernel.Reflect.getOwnPropertyDescriptor(this, V);
  if (!d)
    return false;
  return d.enumerable;
}
