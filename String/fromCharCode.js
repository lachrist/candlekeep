
String.fromCharCode = function fromCharCode () {
  return Kernel.Reflect.apply(Kernel.String.fromCodePoint, null, arguments);
}
