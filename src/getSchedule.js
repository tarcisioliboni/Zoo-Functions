const data = require('../data/zoo_data');

const hoursToObj = Object.entries(data.hours);

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const animalsNames = ['lions', 'giraffes', 'tigers', 'bears',
  'elephants', 'penguins', 'otters', 'frogs', 'snakes'];

const object = {
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
  Monday: [],
};
const destructurinFullSchedule = () => {
  const object2 = {};
  const day1 = object.Tuesday[0];
  object2.Tuesday = day1;
  const day2 = object.Wednesday[0];
  object2.Wednesday = day2;
  const day3 = object.Thursday[0];
  object2.Thursday = day3;
  const day4 = object.Friday[0];
  object2.Friday = day4;
  const day5 = object.Saturday[0];
  object2.Saturday = day5;
  const day6 = object.Sunday[0];
  object2.Sunday = day6;
  const day7 = object.Monday[0];
  object2.Monday = day7;
  return object2;
};

const fullSchedule = () => {
  hoursToObj.map((dia) => object[dia[0]].push({ officeHour: (dia[1].open === 0)
    ? ('CLOSED') : `Open from ${dia[1].open}am until ${dia[1].close}pm`,
  exhibition: (dia[1].open === 0) ? ('The zoo will be closed!') : (data.species
    .filter((specie) => specie.availability.includes(dia[0])).map((nombre) => nombre.name)),
  }));

  return destructurinFullSchedule();
};

const daysFunc = (scheduleTarget) => {
  fullSchedule();
  const obj3 = {};
  const day = object[scheduleTarget][0];
  obj3[scheduleTarget] = day;
  return obj3;
};

const animalAvailability = (scheduleTarget) => {
  const itsAvaiable = data.species.filter((specie) =>
    specie.name === scheduleTarget).map((dispo) => dispo.availability)[0];
  return itsAvaiable;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return fullSchedule();
  if (weekDays.includes(scheduleTarget)) return daysFunc(scheduleTarget);
  if (animalsNames.includes(scheduleTarget)) return animalAvailability(scheduleTarget);
  return fullSchedule();
}

// console.log(animalAvailability('lions'));
module.exports = getSchedule;
