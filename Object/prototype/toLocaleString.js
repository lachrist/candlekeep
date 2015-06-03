
Object.prototype.toLocaleString = function toLocaleString () {
  return Kernel.Reflect.apply(Kernel.Object.prototype.toString, this);
};
