const { name } = require('faker/locale/pt_BR');
const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
newObj = {};

let sumChild = 0;
let sumAdult = 0;
let sumSenior = 0;

function countEntrants(entrants) {
  if (Object.keys(entrants).length === 0 || entrants == null) {
    return 0;
  }
  for (let index = 0; index < entrants.length; index += 1) {
    let entrantAge = entrants[index].age;
    if (entrantAge < 18) {
      sumChild += 1;
    }
    if (entrantAge >= 18 && entrantAge < 50) {
      sumAdult += 1;
    } else if (entrantAge >=50) {
      sumSenior += 1;
    }
  }
newObj['child'] = sumChild;
newObj['adult'] = sumAdult;
newObj['senior'] = sumSenior;
  return newObj;
}

function calculateEntry(entrants) {
  if (Object.keys(entrants).length === 0 || entrants == null) {
    return 0;
  }
  let totalValue = ((sumChild * prices.child)
  + (sumAdult * prices.adult)
  + (sumSenior * prices.senior));
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };

// const entrants = [
//   { name: name.findName(), age: 50 }
//   ];
  
// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));

