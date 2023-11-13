const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('17 - Escreva uma query que retorne os títulos das músicas do álbum Thriller. Ordene o resultado pelo título em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] =  await runQuery('../../src/17_challenge.sql');
    expect(result).toStrictEqual([
      { 'Título': 'Beat It' },
      { 'Título': 'Billie Jean' },
      { 'Título': 'The Girl Is Mine' },
      { 'Título': 'Thriller' }
    ]);
  });
});
    