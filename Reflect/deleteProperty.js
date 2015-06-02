
Reflect.deleteProperty = function deleteProperty (target, propertyKey) {
  return delete target[propertyKey];
}
