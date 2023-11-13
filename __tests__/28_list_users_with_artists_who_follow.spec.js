 const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('28 - Escreva uma query que retorne o nome das pessoas usuárias e o total das pessoas artistas que ela segue. Ordene o resultado pelo nome das pessoas usuárias, em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async () => {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [result] =  await runQuery('../../src/28_challenge.sql');
    expect(result).toStrictEqual([
      { 'Pessoa usuária': 'Andressa', 'Artistas que segue': 4 },
      { 'Pessoa usuária': 'Camila', 'Artistas que segue': 2 },
      { 'Pessoa usuária': 'Cássia', 'Artistas que segue': 3 },
      { 'Pessoa usuária': 'Guilherme', 'Artistas que segue': 2 },
      { 'Pessoa usuária': 'Júlio', 'Artistas que segue': 2 },
      { 'Pessoa usuária': 'Luís', 'Artistas que segue': 2 },
      { 'Pessoa usuária': 'Melissa', 'Artistas que segue': 2 },
      { 'Pessoa usuária': 'Pedro', 'Artistas que segue': 3 },
      { 'Pessoa usuária': 'Rogério', 'Artistas que segue': 1 },
      { 'Pessoa usuária': 'Simone', 'Artistas que segue': 3 }
    ]);
  });
});