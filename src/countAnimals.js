const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const newObj = {};

function countAnimals(animal) {
  if (animal == null) {
    for (let index = 0; index < species.length; index += 1) {
      newObj[species[index].name] = species[index].residents.length;
    }
    return newObj;
  }
  const aniSpecies = Object.values(animal)[0];
  const aniSex = Object.values(animal)[1];

  if (Object.values(animal).length === 1) {
    return data.species.find((specie) =>
      (specie.name === aniSpecies)).residents.length;
  }

  if (Object.values(animal).length === 2) {
    return data.species.find((specie) =>
      (specie.name === aniSpecies)).residents.filter((sexType) => sexType.sex === aniSex).length;
  }
}

module.exports = countAnimals;

console.log(countAnimals());
