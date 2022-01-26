const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(insertId) {
  const managerId = data.employees.find(({ id }) =>
    insertId === id).id;
  if (managerId === stephanieId || managerId === olaId || managerId === burlId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const managerTeam = employees.filter((item) => item.managers.includes(managerId));
    const arrayTeam = [];
    managerTeam.forEach((employ) =>
      arrayTeam.push(`${employ.firstName} ${employ.lastName}`));
    return arrayTeam;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// console.log(getRelatedEmployees());
