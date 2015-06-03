
Array.prototype.push = function () {
  for (var i=0; i<arguments.length; i++)
    this[this.length] = arguments[i];
  return this.length;
}
