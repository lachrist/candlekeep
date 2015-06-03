
Array.prototype.map = function (callbackfn, thisArg) {
  var res = [];
  for (var i=0; i<this.length; i++)
    res[i] = Kernel.Reflect.apply(callbackfn, thisArg, [this[i], i, this]);
  return res;
}
