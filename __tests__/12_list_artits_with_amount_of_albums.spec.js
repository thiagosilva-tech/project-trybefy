const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('12 - Escreva uma query que retorne o nome das pessoas artistas e a respectiva quantidade de álbuns que cada uma possui. Ordene o resultado pelas pessoas que possuem mais álbuns e em caso de empate, ordene pelo nome da pessoa artista, em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] =  await runQuery('../../src/12_challenge.sql');
    expect(result).toStrictEqual([
      { 'Artista': 'The Beatles', 'Quantidade de álbuns': 4 },
      { 'Artista': 'BTS', 'Quantidade de álbuns': 3 },
      { 'Artista': 'Michael Jackson', 'Quantidade de álbuns': 3 },
      { 'Artista': 'Rita Lee', 'Quantidade de álbuns': 3 },
      { 'Artista': 'Nina Simone', 'Quantidade de álbuns': 2 }
    ]);
  });
});
    