
Array.of = function of () {
  var res = [];
  for (var i=0; i<arguments.length; i++)
    res[i] = arguments[i];
  return res;
};
