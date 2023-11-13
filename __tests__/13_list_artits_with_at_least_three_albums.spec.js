const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('13 - Escreva uma query que retorne o nome das pessoas artistas que possuem pelo menos três álbuns cadastrados. Ordene o resultado pelo nome da pessoa em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] =  await runQuery('../../src/13_challenge.sql');
    
    expect(result).toStrictEqual([
      { 'Artista': 'BTS' },
      { 'Artista': 'Michael Jackson' },
      { 'Artista': 'Rita Lee' },
      { 'Artista': 'The Beatles'},
    ]);
  });

  it('A query deve continuar retornando os dados ordenados corretamente, mesmo ao inserir um novo álbum', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await connection.query('INSERT INTO albums (title, release_year, artist_id) VALUES ("Baltimore", 1978, 2);');
    const [result] =  await runQuery('../../src/13_challenge.sql');
    
    expect(result).toStrictEqual([
      { 'Artista': 'BTS' },
      { 'Artista': 'Michael Jackson' },
      { 'Artista': 'Nina Simone' },
      { 'Artista': 'Rita Lee' },
      { 'Artista': 'The Beatles' },
    ]);
  });
});
    