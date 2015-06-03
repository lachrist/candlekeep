
var xs = [1,2,3];
assert(xs.pop() === 3);
xs = JSON.stringify(xs);
assert(xs === '[1,2]', xs);
