
var xs = [1,2,3];
assert(xs.push(4,5) === 5, "length")
xs = JSON.stringify(xs);
assert(xs === '[1,2,3,4,5]', xs);
