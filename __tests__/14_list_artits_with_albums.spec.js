const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('14 - Escreva uma query que retorne o nome das pessoas artistas e seus respectivos álbuns. Ordene o resultado pelo nome da pessoa em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] =  await runQuery('../../src/14_challenge.sql');
    expect(result).toStrictEqual([
      { 'Artista': 'BTS', 'Álbuns': 'Map of the Soul: 7,You Never Walk Alone,Love Yourself: Tear' },
      { 'Artista': 'Michael Jackson', 'Álbuns': 'Thriller,Bad,Dangerous' },
      { 'Artista': 'Nina Simone', 'Álbuns': 'I Put a Spell on You,Sings the Blues' },
      { 'Artista': 'Rita Lee', 'Álbuns': 'Build Up,Fruto Proibido,Entradas e Bandeiras' },
      { 'Artista': 'The Beatles', 'Álbuns': 'Sgt. Peppers Lonely Hearts Club Band,The Beatles,Abbey Road,Let It Be' },
    ]);
  });
});
    