
var fs = require("fs");

function assert (test, message) {
  if (!test)
    throw "Assertion error: "+message;
}

function test (dirname) {
  if (fs.lstatSync(dirname).isDirectory()) {
    var names = fs.readdirSync(dirname);
    for (var i=0; i<names.length; i++)
      if (names[i].endsWith(".js")) {
        var path = dirname+"/"+names[i];
        console.log(path);
        Function("assert", fs.readFileSync(path, {encoding:"utf8"}))(assert);
      }
      else
        test(dirname+"/"+names[i]);
  }
}

require("./makebundle.js");

require("./bundle.js");

test(__dirname+"/test");
