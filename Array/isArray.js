
Array.isArray = function isArray (arg) {
  return Kernel.Reflect.apply(Kernel.Object.prototype.toString, arg, []) === "[object Array]";
};
