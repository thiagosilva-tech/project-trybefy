const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('19 - Escreva uma query que retorne o nome e a duração da música, juntamente com o título do álbum, mas apenas das músicas que possuem entre 5 e 8 minutos de duração. Ordene o resultado pela duração da música em ordem crescente', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] =  await runQuery('../../src/19_challenge.sql');
    expect(result).toStrictEqual([
      {
        "Título": "A Day in the Life",
        "Duração": 308,
        "Álbum": "Sgt. Peppers Lonely Hearts Club Band",
      },
      {
        "Título": "Man in the Mirror",
        "Duração": 321,
        "Álbum": "Bad",
      },
      {
        "Título": "Thriller",
        "Duração": 353,
        "Álbum": "Thriller",
      },
    ]);
  });
});
