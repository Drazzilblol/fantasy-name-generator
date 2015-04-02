var dwarf = module.exports.dwarf = require('./libs/dwarf');
var elf = module.exports.elf = require('./libs/elf');
module.exports.random = require('./libs/random');

var locales = exports.locales = require('./libs/locales');

exports.locale = "ru";
exports.localeFallback = "ru";
exports.definitions = {};


var _definitions = {
  "dwarf": ["first_name","last_name"],
  "elf": ["first_name","last_name"],
  "human": ["prefix", "suffix"]
};
// Create a Getter for all definitions.foo.bar propetries
Object.keys(_definitions).forEach(function(d){
  if (typeof exports.definitions[d] === "undefined") {
    exports.definitions[d] = {};
  }
  _definitions[d].forEach(function(p){
    Object.defineProperty(exports.definitions[d], p, {
      get: function () {
        if (typeof locales[exports.locale][d] === "undefined" || typeof locales[exports.locale][d][p] === "undefined") {
// certain localization sets contain less data then others.
// in the case of a missing defintion, use the default localeFallback to substitute the missing set data
          return locales[exports.localeFallback][d][p];
        } else {
// return localized data
          return locales[exports.locale][d][p];
        }
      }
    });
  });
});

console.log(elf.findName());
