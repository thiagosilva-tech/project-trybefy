const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('26 - Escreva uma query que retorne o nome da pessoa artista e a quantidade de músicas reproduzidas da pessoa, mas apenas artistas que possuem mais do que 10 músicas reproduzidas. Ordene o resultado pelo nome da pessoa em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async () => {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] =  await runQuery('../../src/26_challenge.sql');
    expect(result).toStrictEqual([
      { 'Artista': 'Michael Jackson', 'Quantidade de músicas reproduzidas': 12 } 
    ]);
  });
});