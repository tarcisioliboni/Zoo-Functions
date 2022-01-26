const { name } = require('faker/locale/pt_BR');
const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const counterPeople = (people) => {
  const output = { child: 0, adult: 0, senior: 0};
  people.forEach((person) => {
    if (person.age < 18) output.child += 1;
    else if (person.age >= 18 && person.age < 50) output.adult += 1;
    else output.senior += 1;
  });
  return output;
}

function countEntrants(entrants) {
  return counterPeople(entrants);
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) return 0;
  let totalValue = 0;
  const guests = countEntrants(entrants)

  totalValue = guests.child * prices.child
  + guests.adult * prices.adult
  + guests.senior * prices.senior;

  return totalValue;
}

module.exports = { calculateEntry, countEntrants };

// const entrants = {};
  
  
// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));
