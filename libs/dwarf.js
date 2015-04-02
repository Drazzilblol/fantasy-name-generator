var generator = require('../index');
var _name = {
  firstName: function () {
    return generator.random.array_element(generator.definitions.dwarf.first_name.prefix) + generator.random.array_element(generator.definitions.dwarf.first_name.suffix)
  },
  lastName: function () {
    return generator.random.array_element(generator.definitions.dwarf.last_name.prefix) + generator.random.array_element(generator.definitions.dwarf.last_name.suffix)

  },
  findName: function (firstName, lastName) {
    firstName = firstName || generator.dwarf.firstName();
    lastName = lastName || generator.dwarf.lastName();
    return firstName + " " + lastName;
  }
};
module.exports = _name;