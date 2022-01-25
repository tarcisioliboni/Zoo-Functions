const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, animalAge) {
  const selectedAnimal = species.find(({ name }) => name === animal);
  return selectedAnimal.residents.every(({ age }) => age >= animalAge);
}

module.exports = getAnimalsOlderThan;
