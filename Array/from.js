
Array.from = function from (items, mapfn, thisArg) {
  var res = [];
  if (items.length) {
    for (var i=0; i<items.length; i++)
      res[i] = mapfn ? Kernel.Reflect.apply(mapfn, thisArg, [items[i]]) : items[i];
    return res;
  }
  for (var e of items)
    res[res.length-1] = mapfn ? Kernel.Reflect.apply(mapfn, thisArg, e) : e;
  return res;
};
