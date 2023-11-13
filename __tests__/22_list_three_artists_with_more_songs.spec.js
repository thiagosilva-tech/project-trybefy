const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('22 - Escreva uma query que retorne o nome das pessoas artistas e a quantidade de músicas feitas por ela, mas exiba apenas, as três primeiras pessoas com mais músicas cadastradas. Ordene o resultado pelas pessoas que mais tem musicas cadastradas e em caso de empate, ordene pelo nome da pessoa, em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] =  await runQuery('../../src/22_challenge.sql');
    expect(result).toStrictEqual([
      { 'Artista': 'Michael Jackson', 'Quantidade de músicas': 12 },
      { 'Artista': 'BTS', 'Quantidade de músicas': 4 },
      { 'Artista': 'Nina Simone', 'Quantidade de músicas': 4 }
    ]);
  });
});
