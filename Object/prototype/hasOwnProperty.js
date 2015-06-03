
Object.prototype.hasOwnProperty = function (V) {
  var ks = Kernel.ownKeys(this);
  for (var i=0; i<ks.length; i++)
    if (ks[i] == V)
      return true;
  return false;
}
