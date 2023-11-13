const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('09 - Escreva uma query que retorne os planos com seus respectivos totais de pessoas vinculadas. Ordene o resultado pelo plano em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/09_challenge.sql');
    expect(result).toStrictEqual([
      { 'Plano': 'Anual', 'Quantidade de usuários': 4 },
      { 'Plano': 'Mensal', 'Quantidade de usuários': 4 },
      { 'Plano': 'Trimestral', 'Quantidade de usuários': 2 }
    ]);
  });
});
    