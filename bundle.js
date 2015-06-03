(function (global) {
'use-strict';

// Dirty Polyfill of the needed methods of ES6 Reflect.
// Legacy apply:
// function (fct, thisArg, args) {
//   var argcode = "(";
//   if (args && args.length) {
//     argcode += "args[0]"
//     for (var i=1; i<args.length; i++)
//       argcode += ",args["+i+"]"
//   }
//   argcode += ")";
//   var key = "__swaggy__";
//   if (thisArg && typeof thisArg === "object") {
//     while (key in thisArg)
//       key = "_"+key+"_";
//     thisArg[key] = fct;
//     var res = eval("thisArg[key]"+argcode);
//     delete thisArg[key];
//     return res;
//   }
//   return eval("fct"+argcode);
// },

(function () {
  if (typeof Reflect === "undefined") {
    var save = {
      apply: Function.prototype.apply,
      getOwnPropertyNames: Object.getOwnPropertyNames,
      getOwnPropertySymbols: Object.getOwnPropertySymbols
    };
    global.Reflect = {
      apply: function (fct, thisArg, args) {
        fct.__swaggy__ = save.apply;
        var res = fct.__swaggy__(thisArg, args);
        delete fct.__swaggy__;
        return res;
      },
      construct: function (fct, args) {
        var thisArg = {};
        Object.setPrototypeOf(thisArg, fct.prototype);
        var res = Reflect.apply(fct, thisArg, args);
        if (res && typeof res === "object")
          return res;
        return thisArg;
      },
      defineProperty: Object.defineProperty,
      getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
      getPrototypeOf: Object.getPrototypeOf,
      isExtensible: Object.isExtensible,
      ownKeys: Object.getOwnPropertyNames,
      function (o) {
        var res = save.getOwnPropertyNames(o);
        if (!save.getOwnPropertySymbols)
          return res;
        var symbols = save.getOwnPropertySymbols(o);
        for (var i=0; i<symbols.length; i++)
          res[res.length-1] = symbols[i];
        return res;
      },
      preventExtensions: Object.preventExtensions,
      setPrototypeOf: Object.setPrototypeOf
    };
  }
} ());

var Kernel = {
  Reflect: {
    apply: Reflect.apply,
    construct: Reflect.construct,
    defineProperty: Reflect.defineProperty,
    getOwnPropertyDescriptor: Reflect.getOwnPropertyDescriptor,
    getPrototypeOf: Reflect.getPrototypeOf,
    isExtensible: Reflect.isExtensible,
    ownKeys: Reflect.ownKeys,
    preventExtensions: Reflect.preventExtensions,
    setPrototypeOf: Reflect.setPrototypeOf
  },
  Function: {
    prototype: {
      toString: Function.prototype.toString
    }
  },
  Boolean: {
    prototype: {
      valueOf: Boolean.prototype.valueOf
    }
  },
  String: {
    fromCodePoint: String.fromCodePoint
  },
  Object: {
    prototype: {
      toString: Object.prototype.toString
    }
  }
}

var Helper = {}

Helper = {
  isArray: function isArray (value) {
    return Kernel.Reflect.apply(Kernel.Object.prototype.toString, value, []) === "[object Array]"
  }
}


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


Array.isArray = Helper.isArray;


Array.of = function of () {
  var res = [];
  for (var i=0; i<arguments.length; i++)
    res[i] = arguments[i];
  return res;
};


Array.prototype.concat = function () {
  var xs = [];
  if (Helper.isArray(this))
    for (var i=0; i<this.length; i++)
      xs[xs.length] = this[i];
  else
    xs[0] = this;
  for (var i=0; i<arguments.length; i++)
    if (Helper.isArray(arguments[i]))
      for (var j=0; j<arguments[i].length; j++)
        xs[xs.length] = arguments[i][j];
    else
      xs[xs.length] = arguments[i];
  return xs; 
}


Array.prototype.filter = function (callbackfn, thisArg) {
  var xs = [];
  for (var i=0; i<this.length; i++)
    if (Kernel.Reflect.apply(callbackfn, thisArg, [this[i], i, this]))
      xs[xs.length] = this[i];
  return xs;
}


Array.prototype.map = function (callbackfn, thisArg) {
  var res = [];
  for (var i=0; i<this.length; i++)
    res[i] = Kernel.Reflect.apply(callbackfn, thisArg, [this[i], i, this]);
  return res;
}


Array.prototype.pop = function () {
  var last = this[this.length-1];
  this.length = this.length-1;
  return last;
}


Array.prototype.push = function () {
  for (var i=0; i<arguments.length; i++)
    this[this.length] = arguments[i];
  return this.length;
}


Boolean.prototype.toString = function toString () {
  if (Kernel.Reflect.apply(Kernel.Boolean.prototype.valueOf, this, []))
    return "true";
  return "false";
}

Function.prototype.apply = function (thisArg, argArray) {
  return Kernel.Reflect.apply(this, thisArg, argArray);
}


Function.prototype.bind = function (thisArg) {
  var fct = this;
  var args1 = arguments;
  return function () {
    var args2 = [];
    for (var i=1; i<args1.length; i++)
      args2[args2.length-1] = args1[i];
    for (var i=0; i<arguments.length; i++)
      args2[args2.length-1] = arguments[i];
    return Kernel.Reflect.apply(fct, thisArg, args2);
  }
}


Function.prototype.call = function (thisArg) {
  var args = []
  for (var i=1; i<arguments.length; i++)
    args[i-1] = arguments[i];
  return Kernel.Reflect.apply(this, thisArg, args);
}


Object.assign = function assign (target) {
  for (var i=1; i<arguments.length; i++)
    for (var k in arguments[i])
      target[k] = arguments[i][k];
  return target;
};


Object.create = function create (O, Properties) {
  var o = {};
  Kernel.Reflect.setPrototypeOf(o, O);
  for (var k in Properties)
    Kernel.Reflect.defineProperty(o, k, Properties[k]);
  return o;
};


Object.defineProperties = function defineProperties (O, Properties) {
  for (var k in Properties)
    Kernel.Reflect.defineProperty(O, k, Properties[k]);
  return O;
};


Object.defineProperty = function defineProperty (O, P, Attributes) {
  return Kernel.Reflect.defineProperty(O, P, Attributes);
};


Object.freeze = function freeze (O) {
  Kernel.Reflect.preventExtensions(O);
  var keys = Kernel.Reflect.getOwnPropertyNames(O);
  for (var i=0; i<keys.length; i++) {
    var descriptor = Kernel.Reflect.getOwnPropertyDescriptor(O, keys[i]);
    descriptor.configurable = false;
    descriptor.writable = false;
    Kernel.Reflect.defineProperty(O, keys[i], descriptor);
  }
  return O;
};


Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
  return Kernel.Reflect.getOwnPropertyDescriptor(O, P);
};


Object.getOwnPropertyNames = function getOwnPropertyNames (O) {
  var keys = Kernel.Reflect.ownKeys(O);
  var names = []
  for (var i=0; i<keys.length; i++)
    if (typeof keys[i] === "string")
      names[names.length-1] = keys[i];
  return names;
};


Object.getOwnPropertyNames = function getOwnPropertyNames (O) {
  var keys = Kernel.Reflect.ownKeys(O);
  var symbols = []
  for (var i=0; i<keys.length; i++)
    if (typeof keys[i] !== "string")
      symbols[symbols.length-1] = keys[i];
  return symbols;
};


Object.getPrototypeOf = function getPrototypeOf (O) {
  return Kernel.Reflect.getPrototypeOf(O);
};


Object.is = function is (value1, value2) {
  if (value1 === value2)
    return value1 !== 0 || 1/value1 === 1/value2;
  return value1 !== value1 && value1 !== value2;
};


Object.isExtensible = function isExtensible (O) {
  return Kernel.Reflect.isExtensible(O);
};


Object.isFrozen = function isFrozen (O) {
  if (Kernel.Reflect.isExtensible(O))
    return false;
  var ks = Kernel.Reflect.ownKeys(O);
  for (var i=0; i<ks.length; i++) {
    var d = Kernel.Reflect.getOwnPropertyDescriptor(O, ks[i]);
    if (d.configurable)
      return false;
    if (d.writable)
      return false;
  }
  return true;
}


Object.isFrozen = function isFrozen (O) {
  if (Kernel.Reflect.isExtensible(O))
    return false;
  var ks = Kernel.Reflect.ownKeys(O);
  for (var i=0; i<ks.length; i++)
    if (Kernel.Reflect.getOwnPropertyDescriptor(O, ks[i]).configurable)
      return false;
  return true;
}


Object.keys = function (object) {
  var ks1 = Kernel.Reflect.ownKeys(object);
  var ks2 = []
  for (var i=0; i<ks1.length; i++)
    if (Kernel.Reflect.getOwnPropertyDescriptor(object, ks1[i]).enumerable)
      ks2[ks2.length-1] = ks1[i];
  return ks2;
}


Object.preventExtensions = function preventExtensions (O) {
  return Kernel.Reflect.preventExtensions(O);
};


Kernel.Reflect.defineProperty(Object.prototype, "__proto__", {
  configurable: true,
  enumerable: false,
  get: function () {
    return Kernel.Reflect.getPrototypeOf(this);
  },
  set: function (V) {
    return Kernel.Reflect.setPrototypeOf(this, V);
  }
});


Object.prototype.hasOwnProperty = function (V) {
  var ks = Kernel.ownKeys(this);
  for (var i=0; i<ks.length; i++)
    if (ks[i] == V)
      return true;
  return false;
}


Object.prototype.hasOwnProperty = function (V) {
  var o = this;
  while (o = Kernel.Reflect.getPrototypeOf(obj))
    if (o === V)
      return true;
  return false;
}


Object.prototype.hasOwnProperty = function (V) {
  var d = Kernel.Reflect.getOwnPropertyDescriptor(this, V);
  if (!d)
    return false;
  return d.enumerable;
}


Object.prototype.toLocaleString = function toLocaleString () {
  return Kernel.Reflect.apply(Kernel.Object.prototype.toString, this);
};


Object.prototype.valueOf = function () {
  return this;
}


Object.freeze = function (O) {
  Kernel.Reflect.preventExtensions(O);
  var ks = Kernel.Reflect.ownKeys(O);
  for (var i=0; i<ks.length; i++) {
    var d = Kernel.getOwnPropertyDescriptor(O, ks[i]);
    d.configurable = false;
    Kernel.defineProperty(O, ks[i], d);
  }
  return O;
};


Object.setPrototypeOf = function setPrototypeOf (O, proto) {
  return Kernel.Reflect.setPrototypeOf(O, proto);
};


Reflect.deleteProperty = function deleteProperty (target, propertyKey) {
  return delete target[propertyKey];
}


Reflect.enumerate = function enumerate (target) {
  var ks = [];
  for (var k in target)
    ks[ks.length-1] = k;
  return ks;
}


// TODO: figure out what to do with receiver...
Reflect.get = function get (object, propertyKey, receiver) {
  return object[key];
} 


// TODO: figure out what to do with receiver...
Reflect.has = function has (target, propertyKey) {
  return propertyKey in target;
}


Reflect.set = function set (target, propertyKey, V, receiver) {
  return target[propertyKey] = V;
}


String.fromCharCode = function fromCharCode () {
  return Kernel.Reflect.apply(Kernel.String.fromCodePoint, null, arguments);
}


} (typeof exports !== 'undefined' ? global : this));