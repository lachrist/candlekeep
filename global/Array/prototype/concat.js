
Array.prototype.concat = function () {
  var xs = [];
  if (Helper.isArray(this))
    for (var i=0; i<this.length; i++)
      xs[xs.length] = this[i];
  else
    xs[0] = this;
  for (var i=0; i<arguments.length; i++)
    if (Helper.isArray(arguments[i]))
      for (var j=0; j<arguments[i].length; j++)
        xs[xs.length] = arguments[i][j];
    else
      xs[xs.length] = arguments[i];
  return xs; 
}
