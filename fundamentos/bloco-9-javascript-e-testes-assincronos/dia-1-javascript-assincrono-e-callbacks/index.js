//Exercicio 3
/*const getPlanet = () => {
  return setTimeout(() =>{
     const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  },4000)
};


getPlanet(); // imprime Marte depois de 4 segundos*/

//Exercicio 4
/*const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () =>{
  setTimeout(()=>{
    console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
  }, messageDelay())
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo*/

//Exercicio 5
/*const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) =>{
  setTimeout(()=>{
    callback(getMarsTemperature());
  }, messageDelay())
  
}
sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo*/

//Exercicio 6

/*const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess,onError) =>{
  const currentTemperature = getMarsTemperature();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() =>{
    if(messageSuccessfullySent){
      onSuccess(currentTemperature)
    } else {
      onError('Robot is busy')
    }
  }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);*/

//Exercicio 7

/*const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('upperCase "test" toBe "TEST"', (done) =>{
  uppercase('test', (str) =>{
    try{
      expect(str).toBe('TEST');
      done();
    } catch(error){
      done(error)
    }
  })
})*/

//Exercicio 8

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(
  (pokemon) => pokemon.name === 'Bulbasaur',
(error,message) => {
  if(error) {
    console.log(error);
  } else {
    console.log(message)
  }
}
);

module.exports = {
  getPokemonDetails,
};