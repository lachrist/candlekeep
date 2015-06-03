
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