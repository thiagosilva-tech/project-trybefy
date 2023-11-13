const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('30 - Escreva uma query que retorne o nome da pessoa artista e o total de pessoas seguidoras que ela possui, mas apenas artistas que possuem menos de 5 seguidores', function () {
  it('Deve retornar os dados conforme a tabela do README', async () => {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    await runQuery('../../src/27_challenge.sql');
    const [result] =  await runQuery('../../src/30_challenge.sql');
    expect(result).toStrictEqual([ { 'Artista': 'Michael Jackson', 'Total de seguidores': 3 } ]);
  });
});