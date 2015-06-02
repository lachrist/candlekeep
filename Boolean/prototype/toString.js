
Boolean.prototype.toString = function toString () {
  if (Kernel.Reflect.apply(Kernel.Boolean.prototype.valueOf, this, []))
    return "true";
  return "false";
}