module.exports.dwarf = require('./libs/dwarf');
module.exports.elf = require('./libs/elf');
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

Object.keys(_definitions).forEach(function(d){
  if (typeof exports.definitions[d] === "undefined") {
    exports.definitions[d] = {};
  }
  _definitions[d].forEach(function(p){
    Object.defineProperty(exports.definitions[d], p, {
      get: function () {
        if (typeof locales[exports.locale][d] === "undefined" || typeof locales[exports.locale][d][p] === "undefined") {
          return locales[exports.localeFallback][d][p];
        } else {
          return locales[exports.locale][d][p];
        }
      }
    });
  });
});

