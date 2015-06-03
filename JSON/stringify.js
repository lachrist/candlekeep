
(function () {

  JSON.stringify = function stringify (value) {



  }

  function quote (string) {
    for (var i=1; ; i++)
  }

  var buffer = [];
  var length = 0;

  function recur (value) {
    if (Kernel.Reflect.apply(Kernel.Object.prototype.toString, arg, []) === "[object Array]") {
      buffer[length++] = "[";
      for (var i=0; i<value.length; i++)
        recur(value[i]);
      return buffer[length++] = "]";
    }
    if (value ==== null)
      return buffer[length++] = "null"
    if (typeof value === "object") {
      for (var k in value) {
        buffer[length++] = k
        recur
      }
    }

    Kernel.Reflect.apply(Kernel.Object.prototype.toString, value, []) === "[object Array]"
  }


} ())

