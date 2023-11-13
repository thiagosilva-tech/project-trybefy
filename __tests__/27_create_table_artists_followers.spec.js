const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('27 - Crie e popule a tabelas `artists_followers`', function () {
  it('A tabela `artists_followers` deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "artists_followers"');
    expect(result.length).toBe(1);
  });

  it('A tabela `artists_followers` deve ter a coluna `user_id` com o tipo inteiro, chave primária, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM artists_followers');
    expect(result).toContainEqual({
        Field: 'user_id',
        Type: 'int',
        Null: 'NO',
        Key: 'PRI',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela `artists_followers` deve ter a coluna `artist_id` com o tipo inteiro, chave primária, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM artists_followers');
    expect(result).toContainEqual({
        Field: 'artist_id',
        Type: 'int',
        Null: 'NO',
        Key: 'PRI',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela "artists_followers" deve ser capaz de criar uma relação com a tabela "users" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE artists_followers');
    expect(result['Create Table']).toContain('FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)');
  });

  it('A tabela "artists_followers" deve ser capaz de criar uma relação com a tabela "artists" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE artists_followers');
    expect(result['Create Table']).toContain('FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)');
  });

  it('A tabela "artists_followers" deve ter uma chave primária formada pelas colunas "user_id" e "artist_id"', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE artists_followers');
    expect(result['Create Table']).toContain('PRIMARY KEY (`user_id`,`artist_id`)');
  });

  it('A tabela "artists_followers" deve ser populada com os dados corretos', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [result] = await connection.query('SELECT * FROM artists_followers ORDER BY user_id, artist_id');
    expect(result).toStrictEqual([
      { user_id: 1, artist_id: 1 },
      { user_id: 1, artist_id: 2 },  
      { user_id: 1, artist_id: 3 },
      { user_id: 2, artist_id: 3 },
      { user_id: 2, artist_id: 4 },
      { user_id: 3, artist_id: 2 },
      { user_id: 3, artist_id: 5 },
      { user_id: 4, artist_id: 2 },
      { user_id: 4, artist_id: 3 },
      { user_id: 4, artist_id: 4 },
      { user_id: 4, artist_id: 5 },
      { user_id: 5, artist_id: 1 },
      { user_id: 5, artist_id: 2 },
      { user_id: 6, artist_id: 2 },
      { user_id: 6, artist_id: 3 },
      { user_id: 6, artist_id: 4 },
      { user_id: 7, artist_id: 1 },
      { user_id: 7, artist_id: 3 },
      { user_id: 7, artist_id: 5 },
      { user_id: 8, artist_id: 5 },
      { user_id: 9, artist_id: 4 },
      { user_id: 9, artist_id: 5 },
      { user_id: 10, artist_id: 2 },
      { user_id: 10, artist_id: 4 },
    ]);
  });
});