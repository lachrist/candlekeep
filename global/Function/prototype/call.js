
Function.prototype.call = function (thisArg) {
  var args = []
  for (var i=1; i<arguments.length; i++)
    args[i-1] = arguments[i];
  return Kernel.Reflect.apply(this, thisArg, args);
}
