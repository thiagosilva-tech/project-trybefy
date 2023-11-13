const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('07 - Escreva queries para remover o plano trimestral', function () {
  it('A primeira query deve alterar todas as pessoas usuárias do plano trimestral para o plano mensal', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [usersPlanQuarterlyBeforeUpdate] = await connection.execute('SELECT * FROM users WHERE plan_id=3');
    expect(usersPlanQuarterlyBeforeUpdate.length).toBe(2);
    await runQuery('../../src/07_challenge.sql');
    const [usersPlanQuarterly] = await connection.execute('SELECT * FROM users WHERE plan_id=3');
    expect(usersPlanQuarterly.length).toBe(0);
  });

  it('A segunda query deve remover o plano trimestral', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[planQuarterlyBeforeDelete]] = await connection.execute('SELECT * FROM plans WHERE id=3');
    expect(planQuarterlyBeforeDelete).toBeDefined();
    await runQuery('../../src/07_challenge.sql');   
    const [[planQuarterly]] = await connection.execute('SELECT * FROM plans WHERE id=3');
    expect(planQuarterly).not.toBeDefined();
  });
});
    