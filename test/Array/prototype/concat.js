
var x = JSON.stringify([1,2,3].concat([4,5], [6,7]));
assert(x === '[1,2,3,4,5,6,7]', x)

x = JSON.stringify(Array.prototype.concat.apply("foo", [[1,2], [3,4]]));
assert(x === '["foo",1,2,3,4]', x);
