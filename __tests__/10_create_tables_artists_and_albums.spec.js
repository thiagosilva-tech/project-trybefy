
const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('10 - Crie e popule as tabelas `artists` e `albums`', function () {
  it('A tabela "artists" deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "artists"');
    expect(result.length).toBe(1);
  });

  it('A tabela "artists" deve ter a coluna id como tipo inteiro, chave primária, não nula e auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM artists');
    expect(result).toContainEqual({
        Field: 'id',
        Type: 'int',
        Null: 'NO',
        Key: 'PRI',
        Default: null,
        Extra: 'auto_increment'
    });
  });

  it('A tabela "artists" deve ter a coluna name como tipo varchar(50), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM artists');
   
    expect(result).toContainEqual({
        Field: 'name',
        Type: 'varchar(50)',
        Null: 'NO',
        Key: '',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela "artists" deve ter a coluna nationality como tipo varchar(30), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM artists');
   
    expect(result).toContainEqual({
        Field: 'nationality',
        Type: 'varchar(30)',
        Null: 'NO',
        Key: '',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela "artists" deve estar populada com os artistas', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SELECT * FROM artists');

    expect(result).toStrictEqual([
      { id: 1, name: 'Michael Jackson', nationality: 'USA' },
      { id: 2, name: 'Nina Simone', nationality: 'USA' },
      { id: 3, name: 'The Beatles', nationality: 'UK' },
      { id: 4, name: 'BTS', nationality: 'KOR' },
      { id: 5, name: 'Rita Lee', nationality: 'BRA' }
    ]);
  });  

  it('A tabela "albums" deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "albums"');
    expect(result.length).toBe(1);
  });

  it('A tabela "albums" deve ter a coluna "id" como tipo inteiro, chave primária, não nula e auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql'); 
    const [result] = await connection.query('SHOW COLUMNS FROM albums'); 
    expect(result).toContainEqual({ Field: 'id', Type: 'int', Null: 'NO', Key: 'PRI', Default: null, Extra: 'auto_increment' }); 
  });

  it('A tabela "users" deve ter a coluna "title" como tipo varchar(50), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM albums');
    expect(result).toContainEqual({ Field: 'title', Type: 'varchar(50)', Null: 'NO', Key: '', Default: null, Extra: '' }); 
  });

  it('A tabela "albums" deve ter a coluna "release_year" como tipo inteiro, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM albums');
    expect(result).toContainEqual({ Field: 'release_year', Type: 'int', Null: 'NO', Key: '', Default: null, Extra: '' }); 
  });

  it('A tabela "albums" deve ter a coluna "artist_id" como tipo inteiro, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM albums');
    expect(result).toContainEqual({ Field: 'artist_id', Type: 'int', Null: 'NO', Key: 'MUL', Default: null, Extra: '' });
  });

  it('A tabela "albums" deve ser capaz de criar uma relação com a tabela "artists" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE albums');
    expect(result['Create Table']).toContain('FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)');
  });

  
  it('A tabela "albums" deve estar populada com os álbuns', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [result] = await connection.query('SELECT id, title, release_year, artist_id FROM albums');
    expect(result).toStrictEqual([
      { id: 1, title: 'Thriller', release_year: 1982, artist_id: 1 },
      { id: 2, title: 'Bad', release_year: 1987, artist_id: 1 },
      { id: 3, title: 'Dangerous', release_year: 1991, artist_id: 1 },
      { id: 4, title: 'I Put a Spell on You', release_year: 1965, artist_id: 2 },
      { id: 5, title: 'Sings the Blues', release_year: 1967, artist_id: 2 },
      { id: 6, title: 'Sgt. Peppers Lonely Hearts Club Band', release_year: 1967, artist_id: 3 },
      { id: 7, title: 'The Beatles', release_year: 1968, artist_id: 3 },
      { id: 8, title: 'Abbey Road', release_year: 1969, artist_id: 3 },
      { id: 9, title: 'Let It Be', release_year: 1970, artist_id: 3 },
      { id: 10, title: 'Map of the Soul: 7', release_year: 2020, artist_id: 4 },
      { id: 11, title: 'You Never Walk Alone', release_year: 2017, artist_id: 4 },
      { id: 12, title: 'Love Yourself: Tear', release_year: 2018, artist_id: 4 },
      { id: 13, title: 'Build Up', release_year: 1970, artist_id: 5 },
      { id: 14, title: 'Fruto Proibido', release_year: 1975, artist_id: 5 },
      { id: 15, title: 'Entradas e Bandeiras', release_year: 1976, artist_id: 5 },
    ]);
  });
});