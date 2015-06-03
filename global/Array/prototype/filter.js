
Array.prototype.filter = function (callbackfn, thisArg) {
  var xs = [];
  for (var i=0; i<this.length; i++)
    if (Kernel.Reflect.apply(callbackfn, thisArg, [this[i], i, this]))
      xs[xs.length] = this[i];
  return xs;
}
