
// TODO: figure out what to do with receiver...
Reflect.has = function has (target, propertyKey) {
  return propertyKey in target;
}
