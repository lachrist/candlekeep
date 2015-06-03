
var fs = require("fs");

var modules = [
  "(function (global) {",
  "'use-strict';",
  fs.readFileSync(__dirname+"/kernel.js", {encoding:"utf8"}),
  fs.readFileSync(__dirname+"/helper.js", {encoding:"utf8"})
];

fs.readdirSync(__dirname+"/global").forEach(function (name) {
  if (name !== ".git")
    read(__dirname+"/global/"+name);
});

function read (dirname) {
  if (fs.lstatSync(dirname).isDirectory()) {
    var names = fs.readdirSync(dirname);
    for (var i=0; i<names.length; i++)
      if (names[i].endsWith(".js"))
        modules.push(fs.readFileSync(dirname+"/"+names[i], {encoding:"utf8"})); 
      else
        read(dirname+"/"+names[i]);
  }
}

modules.push("} (typeof exports !== 'undefined' ? global : this));")

fs.writeFileSync(__dirname+"/bundle.js", modules.join("\n"));
