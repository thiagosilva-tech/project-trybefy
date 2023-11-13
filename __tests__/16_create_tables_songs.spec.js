
const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('16 - Crie e popule a tabela `songs`', function () {
  it('A tabela "songs" deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "songs"');
    expect(result.length).toBe(1);
  });
  
  it('A tabela "songs" deve ter a coluna id como tipo inteiro, chave primária, não nula e auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM songs');
    expect(result).toContainEqual({
      Field: 'id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: 'auto_increment'
    });
  });
  
  it('A tabela "songs" deve ter a coluna title como tipo varchar(50), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM songs');
    
    expect(result).toContainEqual({
      Field: 'title',
      Type: 'varchar(50)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
  
  it('A tabela "songs" deve ter a coluna duration_in_seconds com o tipo inteiro, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM songs');
    expect(result).toContainEqual({
      Field: 'duration_in_seconds',
      Type: 'int',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
  
  it('A tabela "songs" deve ter a coluna album_id como tipo inteiro, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM songs');
    expect(result).toContainEqual({
      Field: 'album_id',
      Type: 'int',
      Null: 'NO',
      Key: 'MUL',
      Default: null,
      Extra: ''
    });
  });
  
  it('A tabela "songs" deve ser capaz de criar uma relação com a tabela "albums" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE songs');
    expect(result['Create Table']).toContain('FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`)');
  });
  
  it('A tabela "songs" deve ser populada com as músicas corretas', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] = await connection.query('SELECT id, title, duration_in_seconds, album_id FROM songs');
    expect(result).toStrictEqual([
      { id: 1, title: 'Billie Jean', duration_in_seconds: 294, album_id: 1 },
      { id: 2, title: 'Beat It', duration_in_seconds: 258, album_id: 1 },
      { id: 3, title: 'The Girl Is Mine', duration_in_seconds: 206, album_id: 1 },
      { id: 4, title: 'Thriller', duration_in_seconds: 353, album_id: 1 },
      { id: 5, title: 'Bad', duration_in_seconds: 258, album_id: 2 },
      { id: 6, title: 'The Way You Make Me Feel', duration_in_seconds: 244, album_id: 2 },
      { id: 7, title: 'Man in the Mirror', duration_in_seconds: 321, album_id: 2 },
      { id: 8, title: 'Smooth Criminal', duration_in_seconds: 253, album_id: 2 },
      { id: 9, title: 'Dirty Diana', duration_in_seconds: 296, album_id: 2 },
      { id: 10, title: 'I Just Can\'t Stop Loving You', duration_in_seconds: 241, album_id: 2 },
      { id: 11, title: 'Black or White', duration_in_seconds: 222, album_id: 3 },
      { id: 12, title: 'Remember the Time', duration_in_seconds: 233, album_id: 3 },
      { id: 13, title: 'I Put a Spell on You', duration_in_seconds: 225, album_id: 4 },
      { id: 14, title: 'Love Me or Leave Me', duration_in_seconds: 182, album_id: 4 },
      { id: 15, title: 'Do I Move You?', duration_in_seconds: 189, album_id: 5 },
      { id: 16, title: 'I Want a Little Sugar in My Bowl', duration_in_seconds: 188, album_id: 5 },
      { id: 17, title: 'With a Little Help from My Friends', duration_in_seconds: 162, album_id: 6 },
      { id: 18, title: 'Lucy in the Sky with Diamonds', duration_in_seconds: 211, album_id: 6 },
      { id: 19, title: 'A Day in the Life', duration_in_seconds: 308, album_id: 6 },
      { id: 20, title: 'Intro: Persona', duration_in_seconds: 180, album_id: 10 },
      { id: 21, title: 'Boy With Luv', duration_in_seconds: 229, album_id: 10 },
      { id: 22, title: 'Make It Right', duration_in_seconds: 221, album_id: 10 },
      { id: 23, title: 'Jamais Vu', duration_in_seconds: 209, album_id: 10 },
      { id: 24, title: 'Ovelha Negra', duration_in_seconds: 234, album_id: 15 },
      { id: 25, title: 'Ando Meio Desligado', duration_in_seconds: 197, album_id: 15 }
    ]);
  });
});