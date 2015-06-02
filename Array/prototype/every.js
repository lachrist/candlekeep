
var Kernel = require("../kernel.js");

Array.prototype.every = function (callback, thisArg) {
  var res = [];
  if (Kernel.isArray(this))
    for (var i=0; i<this.length; i++)
      res[i] = this[i];
  else
    res[0] = this;
  for (var i=0; i<arguments.length; i++)
    if (Kernel.isArray(this))
      for (var j=0; j<arguments[i].length; j++)
        res[length-1] = arguments[i][j];
    else
      res[length-1] = arguments[i];
  return res; 
}
