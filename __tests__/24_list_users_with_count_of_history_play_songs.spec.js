const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('24 - Escreva uma query que retorne o nome das pessoas usuárias e a quantidade de músicas reproduzidas por ela. Ordene o resultado pela maior quantidade de reprodução e em caso de empate, ordene pelo nome da pessoa, em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async () => {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    await runQuery('../../src/23_challenge.sql');
    const [result] =  await runQuery('../../src/24_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome': 'Andressa', 'Quantidade de músicas reproduzidas': 3 },
      { 'Nome': 'Camila', 'Quantidade de músicas reproduzidas': 3 },
      { 'Nome': 'Guilherme', 'Quantidade de músicas reproduzidas': 3 },
      { 'Nome': 'Pedro', 'Quantidade de músicas reproduzidas': 3 },
      { 'Nome': 'Cássia', 'Quantidade de músicas reproduzidas': 2 },
      { 'Nome': 'Júlio', 'Quantidade de músicas reproduzidas': 2 },
      { 'Nome': 'Luís', 'Quantidade de músicas reproduzidas': 2 },
      { 'Nome': 'Melissa', 'Quantidade de músicas reproduzidas': 2 },
      { 'Nome': 'Rogério', 'Quantidade de músicas reproduzidas': 2 },
      { 'Nome': 'Simone', 'Quantidade de músicas reproduzidas': 2 }
    ]);
  });
});