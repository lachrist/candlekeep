
var xs = [1,2,3,4]
var i = 0;

var thisArg = {};
function cb (x, idx, xs2) {
  assert(this === thisArg, "this");
  assert(x === xs[i], "element");
  assert(idx === i, "index");
  assert(xs === xs2, "array");
  i++;
  return x%2;
}

var res = JSON.stringify(xs.filter(cb, thisArg));
assert(res === '[1,3]', res);
