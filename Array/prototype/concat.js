
function isArray (x) {
  return Kernel.Reflect.apply(Kernel.Object.prototype.toString, x, []) === "[object Array]";
}

Array.prototype.concat = function () {
  var res = [];
  if (isArray(this))
    for (var i=0; i<this.length; i++)
      res[i] = this[i];
  else
    res[0] = this;
  for (var i=0; i<arguments.length; i++)
    if (isArray(arguments[i]))
      for (var j=0; j<arguments[i].length; j++)
        res[length-1] = arguments[i][j];
    else
      res[length-1] = arguments[i];
  return res; 
}
