const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('06 - Escreva queries para atualizar dados da tabela `users`', function () {
  it('A primeira query deve ativar a usuária Andressa', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[userAndressaBeforeUpdate]] = await connection.execute('SELECT * FROM users WHERE id=8');
    expect(userAndressaBeforeUpdate.active).toBeTruthy();
    await runQuery('../../src/06_challenge.sql');
    const [[userAndressa]] = await connection.execute('SELECT * FROM users WHERE id=4');
    expect(userAndressa.active).toBeTruthy();
  });

  it('A segunda query deve desativar o usuário Rogério', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[userRogerioBeforeUpdate]] = await connection.execute('SELECT * FROM users WHERE id=8');
    expect(userRogerioBeforeUpdate.active).toBeTruthy();
    await runQuery('../../src/06_challenge.sql');   
    const [[userRogerio]] = await connection.execute('SELECT * FROM users WHERE id=8');
    expect(userRogerio.active).toBeFalsy();
  });

  it('A terceira query deve alterar o plano ativo da usuária Camila para o plano Mensal', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[userCamilaBeforeUpdate]] = await connection.execute('SELECT * FROM users WHERE id=2');
    expect(userCamilaBeforeUpdate.plan_id).toBe(1);
    await runQuery('../../src/06_challenge.sql');
    const [[userCamila]] = await connection.execute('SELECT * FROM users WHERE id=2');
    expect(userCamila.plan_id).toBe(2);
  });
});
    