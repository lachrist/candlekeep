
exports.Reflect = {
  apply: Reflect.apply,
  construct: Reflect.construct,
  defineProperty: Reflect.defineProperty,
  getOwnPropertyDescriptor: Reflect.getOwnPropertyDescriptor,
  getPrototypeOf: Reflect.getPrototypeOf,
  isExtensible: Reflect.isExtensible,
  ownKeys: Reflect.ownKeys,
  setPrototypeOf: Reflect.setPrototypeOf
};

exports.Function = {
  prototype: {
    toString: Function.prototype.toString
  }
}

exports.Boolean = {
  prototype: {
    valueOf: Boolean.prototype.valueOf
  }
}

exports.Symbol = {
  iterator: Symbol.iterator,
  match: Symbol.match,
  species: Symbol.species,
  prototype: {
    
  }
}

exports.Object = {
  prototype: {
    toString: Object.prototype.toString
  }
};

exports.Proxy = {
  revocable: Proxy.Revocable
};
