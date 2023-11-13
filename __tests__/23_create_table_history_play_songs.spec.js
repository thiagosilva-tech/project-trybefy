const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('23 - Crie e popule a tabela `history_play_songs`', function () {
  it('A tabela `history_play_songs` deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "history_play_songs"');
    expect(result.length).toBe(1);
  });

  it('A tabela `history_play_songs` deve ter a coluna `id` como tipo inteiro, chave primária, não nula e auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM history_play_songs');
    expect(result).toContainEqual({
        Field: 'id',
        Type: 'int',
        Null: 'NO',
        Key: 'PRI',
        Default: null,
        Extra: 'auto_increment'
    });
  });

  it('A tabela `history_play_songs` deve ter a coluna `user_id` como tipo inteiro, chave estrangeira, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM history_play_songs');
    expect(result).toContainEqual({
        Field: 'user_id',
        Type: 'int',
        Null: 'NO',
        Key: 'MUL',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela `history_play_songs` deve ter a coluna `song_id` como tipo inteiro, chave estrangeira, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM history_play_songs');
    expect(result).toContainEqual({
        Field: 'song_id',
        Type: 'int',
        Null: 'NO',
        Key: 'MUL',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela `history_play_songs` deve ter a coluna `played_at` como tipo datetime, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM history_play_songs');
    expect(result).toContainEqual({
        Field: 'played_at',
        Type: 'datetime',
        Null: 'NO',
        Key: '',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela "history_play_songs" deve ser capaz de criar uma relação com a tabela "users" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE history_play_songs');
    expect(result['Create Table']).toContain('FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)');
  });

  it('A tabela "history_play_songs" deve ser capaz de criar uma relação com a tabela "songs" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE history_play_songs');
    expect(result['Create Table']).toContain('FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`)');
  });

  it('A tabela "history_play_songs" deve ser populada com os dados corretos', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] = await connection.query('SELECT * FROM history_play_songs');
    expect(result).toStrictEqual([
      { id: 1, user_id: 1, song_id: 5, played_at: new Date('2023-10-17T09:30:00.000Z') },
      { id: 2, user_id: 2, song_id: 10, played_at: new Date('2023-10-17T10:15:00.000Z') },
      { id: 3, user_id: 3, song_id: 14, played_at: new Date('2023-10-17T11:45:00.000Z') },
      { id: 4, user_id: 4, song_id: 19, played_at: new Date('2023-10-17T12:30:00.000Z') },
      { id: 5, user_id: 5, song_id: 8, played_at: new Date('2023-10-17T13:20:00.000Z') },
      { id: 6, user_id: 6, song_id: 22, played_at: new Date('2023-10-17T14:10:00.000Z') },
      { id: 7, user_id: 7, song_id: 3, played_at: new Date('2023-10-17T15:00:00.000Z') },
      { id: 8, user_id: 8, song_id: 16, played_at: new Date('2023-10-17T16:15:00.000Z') },
      { id: 9, user_id: 9, song_id: 11, played_at: new Date('2023-10-17T17:45:00.000Z') },
      { id: 10, user_id: 10, song_id: 24, played_at: new Date('2023-10-17T18:30:00.000Z') },
      { id: 11, user_id: 1, song_id: 12, played_at: new Date('2023-10-17T19:00:00.000Z') },
      { id: 12, user_id: 2, song_id: 20, played_at: new Date('2023-10-17T20:30:00.000Z') },
      { id: 13, user_id: 3, song_id: 1, played_at: new Date('2023-10-17T21:15:00.000Z') },
      { id: 14, user_id: 4, song_id: 18, played_at: new Date('2023-10-17T22:00:00.000Z') },
      { id: 15, user_id: 5, song_id: 4, played_at: new Date('2023-10-17T23:30:00.000Z') },
      { id: 16, user_id: 6, song_id: 25, played_at: new Date('2023-10-17T00:45:00.000Z') },
      { id: 17, user_id: 7, song_id: 2, played_at: new Date('2023-10-17T01:20:00.000Z') },
      { id: 18, user_id: 8, song_id: 13, played_at: new Date('2023-10-17T02:10:00.000Z') },
      { id: 19, user_id: 9, song_id: 21, played_at: new Date('2023-10-17T03:45:00.000Z') },
      { id: 20, user_id: 10, song_id: 7, played_at: new Date('2023-10-17T04:30:00.000Z') },
      { id: 21, user_id: 1, song_id: 9, played_at: new Date('2023-10-17T05:15:00.000Z') },
      { id: 22, user_id: 2, song_id: 17, played_at: new Date('2023-10-17T06:20:00.000Z') },
      { id: 23, user_id: 3, song_id: 15, played_at: new Date('2023-10-17T07:30:00.000Z') },
      { id: 24, user_id: 4, song_id: 6, played_at: new Date('2023-10-17T08:15:00.000Z')  }
    ]);
  });
});