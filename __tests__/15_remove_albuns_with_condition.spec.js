const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('15 - Escreva uma query para remover álbuns lançados entre 1970 e 1979', function () {
  it('Deve retornar os dados corretos após a exclusão', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    const [albumsToBeRemoved] = await connection.execute('SELECT * FROM albums WHERE id IN (9, 13, 14, 15)');
    const albumsIds = albumsToBeRemoved.map(({ id }) => id);
    expect(albumsIds).toStrictEqual([9, 13, 14, 15]);
    await runQuery('../../src/15_challenge.sql');
    const [albumsToBeRemovedAfterRemove] = await connection.execute('SELECT * FROM albums WHERE id IN (9, 13, 14, 15)');
    expect(albumsToBeRemovedAfterRemove.length).toBe(0);
  });

  it('A query deve continuar retornando os dados corretamente, mesmo ao alterar um ano de lançamento do álbum', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await connection.execute('UPDATE albums SET release_year = 2020 WHERE id = 9');
    await runQuery('../../src/15_challenge.sql');
    const [albumsToBeRemovedAfterRemove] = await connection.execute('SELECT * FROM albums WHERE id IN (9, 13, 14, 15)');
    expect(albumsToBeRemovedAfterRemove.length).toBe(1);
  });
});
    