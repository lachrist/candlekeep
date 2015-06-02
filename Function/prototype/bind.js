
Kernel = require("../../kernel.js");

Function.prototype.bind = function (thisArg) {
  var fct = this;
  var args1 = arguments;
  return function () {
    var args2 = [];
    for (var i=1; i<args1.length; i++)
      args2[args2.length-1] = args1[i];
    for (var i=0; i<arguments.length; i++)
      args2[args2.length-1] = arguments[i];
    return Kernel.Reflect.apply(fct, thisArg, args2);
  }
}
