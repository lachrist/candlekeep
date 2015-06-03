
Helper = {
  isArray: function isArray (value) {
    return Kernel.Reflect.apply(Kernel.Object.prototype.toString, value, []) === "[object Array]"
  }
}
