const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('25 - Escreva uma query que retorne o nome dos álbuns e a quantidade de músicas reproduzidas daquele álbum, mas exiba apenas os cinco primeiros resultados. Ordene o resultado pela maior quantidade de reprodução e em caso de empate, ordene pelo nome do álbum, em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async () => {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] =  await runQuery('../../src/25_challenge.sql');
    expect(result).toStrictEqual([
      { 'Álbum': 'Bad', 'Quantidade de músicas reproduzidas': 6 },
      { 'Álbum': 'Thriller', 'Quantidade de músicas reproduzidas': 4 },
      { 'Álbum': 'Map of the Soul: 7', 'Quantidade de músicas reproduzidas': 3 },
      { 'Álbum': 'Sgt. Peppers Lonely Hearts Club Band', 'Quantidade de músicas reproduzidas': 3 },
      { 'Álbum': 'Dangerous', 'Quantidade de músicas reproduzidas': 2 }
    ]);
  });
});