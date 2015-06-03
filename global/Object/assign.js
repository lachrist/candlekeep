
Object.assign = function assign (target) {
  for (var i=1; i<arguments.length; i++)
    for (var k in arguments[i])
      target[k] = arguments[i][k];
  return target;
};
