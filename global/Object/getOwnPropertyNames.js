
Object.getOwnPropertyNames = function getOwnPropertyNames (O) {
  var keys = Kernel.Reflect.ownKeys(O);
  var names = []
  for (var i=0; i<keys.length; i++)
    if (typeof keys[i] === "string")
      names[names.length-1] = keys[i];
  return names;
};
