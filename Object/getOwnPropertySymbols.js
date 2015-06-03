
Object.getOwnPropertyNames = function getOwnPropertyNames (O) {
  var keys = Kernel.Reflect.ownKeys(O);
  var symbols = []
  for (var i=0; i<keys.length; i++)
    if (typeof keys[i] !== "string")
      symbols[symbols.length-1] = keys[i];
  return symbols;
};
