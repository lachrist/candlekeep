
Function.prototype.apply = function (thisArg, argArray) {
  return Kernel.Reflect.apply(this, thisArg, argArray);
}
