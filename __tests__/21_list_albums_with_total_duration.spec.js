const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('21 - Escreva uma query que retorne o nome dos álbuns e a soma da duração de todas as suas músicas em segundos. Ordene o resultado pela soma das durações, da maior para a menor', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] =  await runQuery('../../src/21_challenge.sql');
    expect(result).toStrictEqual([
      { 'Álbum': 'Bad', 'Duração': '1613' },
      { 'Álbum': 'Thriller', 'Duração': '1111' },
      { 'Álbum': 'Map of the Soul: 7', 'Duração': '839' },
      { 'Álbum': 'Sgt. Peppers Lonely Hearts Club Band', 'Duração': '681' },
      { 'Álbum': 'Dangerous', 'Duração': '455' },
      { 'Álbum': 'Entradas e Bandeiras', 'Duração': '431' },
      { 'Álbum': 'I Put a Spell on You', 'Duração': '407' },
      { 'Álbum': 'Sings the Blues', 'Duração': '377' }
    ]);
  });
});
