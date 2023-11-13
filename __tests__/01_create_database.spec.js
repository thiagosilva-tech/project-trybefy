const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('01 - Crie uma base de dados chamada `Trybefy`', function () {
  it('Deve ser capaz de criar o banco de dados Trybefy', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    const [results] = await connection.query('SHOW DATABASES LIKE "Trybefy";');
    expect(results.length).toBe(1);
  });
});