const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('11 - Escreva uma query que retorne o nome e ano de lançamento do álbum, juntamente com o nome da pessoa artista, mas apenas para álbuns que possuam a palavra "you". Ordene o resultado pelo ano de lançamento de forma crescente', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] =  await runQuery('../../src/11_challenge.sql');
    expect(result).toStrictEqual([
      { 'Album': 'I Put a Spell on You', 'Ano de lançamento': 1965, 'Artista': 'Nina Simone' },
      { 'Album': 'You Never Walk Alone', 'Ano de lançamento': 2017, 'Artista': 'BTS' },
      { 'Album': 'Love Yourself: Tear', 'Ano de lançamento': 2018, 'Artista': 'BTS' }
    ]);
  });
});
    