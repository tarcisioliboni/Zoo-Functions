const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const selectedEmployee = data.employees.find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
  return employeeName ? selectedEmployee : {};
}

module.exports = getEmployeeByName;

// console.log(getEmployeeByName('Bethea'));
