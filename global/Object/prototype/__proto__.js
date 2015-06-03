
Kernel.Reflect.defineProperty(Object.prototype, "__proto__", {
  configurable: true,
  enumerable: false,
  get: function () {
    return Kernel.Reflect.getPrototypeOf(this);
  },
  set: function (V) {
    return Kernel.Reflect.setPrototypeOf(this, V);
  }
});
