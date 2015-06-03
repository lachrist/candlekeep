
var xs = [1,2,3]
var i = 0;

var thisArg = {};
function cb (x, idx, xs2) {
  assert(this === thisArg, "this");
  assert(x === xs[i], "element");
  assert(idx === i, "index");
  assert(xs === xs2, "array");
  i++;
  return 2*x;
}

var res = JSON.stringify(xs.map(cb, thisArg));
assert(res === '[2,4,6]', res);
