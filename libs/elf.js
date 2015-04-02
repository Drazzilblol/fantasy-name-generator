var generator = require('../index');
var _name = {
  firstName: function () {
    return generator.random.array_element(generator.definitions.elf.first_name.prefix) + generator.random.array_element(generator.definitions.elf.first_name.suffix)
  },
  lastName: function () {
    return generator.random.array_element(generator.definitions.elf.last_name.prefix) + " " + generator.random.array_element(generator.definitions.elf.last_name.suffix)

  },
  findName: function (firstName, lastName) {
    firstName = firstName || generator.elf.firstName();
    lastName = lastName || generator.elf.lastName();
    return firstName + " " + lastName;
  }
};
module.exports = _name;