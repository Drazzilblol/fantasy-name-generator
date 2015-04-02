var generator = require('../index');
var random = {

  randomInt: function(low, high){
    return Math.floor(Math.random() * (high - low + 1) + low);
  },

  array_element: function(array) {
    array = array || ["a", "b", "c"];
    var r = generator.random.randomInt(0, array.length - 1);
    return array[r];
  }
}
module.exports = random;