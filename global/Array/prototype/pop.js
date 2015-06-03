
Array.prototype.pop = function () {
  var last = this[this.length-1];
  this.length = this.length-1;
  return last;
}
