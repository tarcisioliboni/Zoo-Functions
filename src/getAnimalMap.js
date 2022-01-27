const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const generalMap = () => {
  const aniMap = { NE: [], NW: [], SE: [], SW: [] };

  const NE = species.filter((place) => place.location === 'NE');
  NE.forEach((item) => { aniMap.NE.push(item.name); });

  const NW = species.filter((place) => place.location === 'NW');
  NW.forEach((item) => { aniMap.NW.push(item.name); });

  const SE = species.filter((place) => place.location === 'SE');
  SE.forEach((item) => { aniMap.SE.push(item.name); });

  const SW = species.filter((place) => place.location === 'SW');
  SW.forEach((item) => { aniMap.SW.push(item.name); });

  return aniMap;
};
const mapaAnimais = generalMap();

const lionNames = () => {
  const leoes = [];
  const nomeLeoes = species.filter((place) => place.name === 'lions');
  nomeLeoes.forEach((animal) => { animal.residents.forEach((nombre) => leoes.push(nombre.name)); });
  return leoes;
};

const giraffesNames = () => {
  const girafas = [];
  const nomeGirafas = species.filter((place) => place.name === 'giraffes');
  nomeGirafas.forEach((animal) =>
    animal.residents.forEach((nombre) => girafas.push(nombre.name)));
  return girafas;
};

const tigersNames = () => {
  const tigres = [];
  const nomeTigres = species.filter((place) => place.name === 'tigers');
  nomeTigres.forEach((animal) =>
    animal.residents.forEach((nombre) => tigres.push(nombre.name)));
  return tigres;
};

const bearsNames = () => {
  const ursos = [];
  const nomeUrsos = species.filter((place) => place.name === 'bears');
  nomeUrsos.forEach((animal) => { animal.residents.forEach((nombre) => ursos.push(nombre.name)); });
  return ursos;
};

const elephantsNames = () => {
  const elefantes = [];
  const nomeElefantes = species.filter((place) => place.name === 'elephants');
  nomeElefantes.forEach((animal) =>
    animal.residents.forEach((nombre) => elefantes.push(nombre.name)));
  return elefantes;
};

const penguinsNames = () => {
  const pinguins = [];
  const nomePinguins = species.filter((place) => place.name === 'penguins');
  nomePinguins.forEach((animal) =>
    animal.residents.forEach((nombre) => pinguins.push(nombre.name)));
  return pinguins;
};

const ottersNames = () => {
  const outros = [];
  const nomeOutros = species.filter((place) => place.name === 'otters');
  nomeOutros.forEach((animal) =>
    animal.residents.forEach((nombre) => outros.push(nombre.name)));
  return outros;
};

const frogsNames = () => {
  const sapos = [];
  const nomeSapos = species.filter((place) => place.name === 'frogs');
  nomeSapos.forEach((animal) =>
    animal.residents.forEach((nombre) => sapos.push(nombre.name)));
  return sapos;
};

const snakesNames = () => {
  const cobras = [];
  const nomeCobras = species.filter((place) => place.name === 'snakes');
  nomeCobras.forEach((animal) =>
    animal.residents.forEach((nombre) => cobras.push(nombre.name)));
  return cobras;
};

function getAnimalMap(options) {
  if (!options) {
    return mapaAnimais;
  }
  if (options.sex === 'female' && options.includeNames === undefined) {
    return mapaAnimais;
  }
  if (options.includeNames === true && options.sorted === true && options.sex !== undefined) {
    return namesSexSorted('female');
  }
  if (options.includeNames === true && options.sex === 'female') {
    return namesSex('female');
  }
  if (options.sorted === true) {
    return animaisOrdenados;
  }
  if (options.includeNames === true) {
    return aniMap2;
  }
}

const aniMap2 = {
  NE: [
    { lions: lionNames() },
    { giraffes: giraffesNames() },
  ],

  NW: [
    { tigers: tigersNames() },
    { bears: bearsNames() },
    { elephants: elephantsNames() },
  ],
  SE: [
    { penguins: penguinsNames() },
    { otters: ottersNames() },
  ],
  SW: [
    { frogs: frogsNames() },
    { snakes: snakesNames() },
  ],
};

const animaisOrdenados = {
  NE: [
    { lions: lionNames().sort() },
    { giraffes: giraffesNames().sort() },
  ],

  NW: [
    { tigers: tigersNames().sort() },
    { bears: bearsNames().sort() },
    { elephants: elephantsNames().sort() },
  ],
  SE: [
    { penguins: penguinsNames().sort() },
    { otters: ottersNames().sort() },
  ],
  SW: [
    { frogs: frogsNames().sort() },
    { snakes: snakesNames().sort() },
  ],
};

let namesSex = (param) => {
  const object = {};
  
  species.map((specie) => (!object[specie.location] ? (object[specie.location] = [{[specie.name]: specie.residents.filter((sexo) => sexo.sex === param).map((nombre) => nombre.name),},]) : object[specie.location].push({[specie.name]: specie.residents.filter((sexo) => sexo.sex === param).map((nombre) => nombre.name),})));
  return object;
};

function namesSexSorted(param) {
  const object = {};
  species.map((specie) => (!object[specie.location] ?
    (object[specie.location] = [{[specie.name]: specie.residents
      .filter((sexo) => sexo.sex === param).map((nombre) => nombre.name)
      .sort(),},]) :object[specie.location].push({[specie.name]: specie
        .residents.filter((sexo) => sexo.sex === param).map((nombre) => nombre.name).sort(),})));
   
  return object;
};

module.exports = getAnimalMap;

// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(options.sex);
