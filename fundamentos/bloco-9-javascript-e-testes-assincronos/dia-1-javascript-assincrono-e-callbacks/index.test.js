// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const erroEsperado = new Error('Não temos esse pokemon');

    function callback(error, result) {
      expect(error).toEqual(erroEsperado);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback)
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const stringEsperada = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'

    function callback(err, result) {
      expect(result).toBe(stringEsperada);
      done;
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback)
  });
});