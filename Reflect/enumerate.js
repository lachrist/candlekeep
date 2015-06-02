
Reflect.enumerate = function enumerate (target) {
  var ks = [];
  for (var k in target)
    ks[ks.length-1] = k;
  return ks;
}
