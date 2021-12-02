//Exercicio 1

/*const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
it('Lista de Repositorios', async() =>{
  const url = 'https://api.github.com/orgs/tryber/repos';

  const result = await getRepos(url)

  expect(result).toContain('sd-01-week4-5-project-todo-list')
  expect(result).toContain('sd-01-week4-5-project-meme-generator')
})*/

//Exercicio 2

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - 1- beforeEach
// 2 - 1 - test
// 3 - 1- afterEach

// 1 -2 before
// 2 - 2 test 
// 3 - 2 after