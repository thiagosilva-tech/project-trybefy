const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('05 - Escreva uma query que retorne o nome e data de nascimento apenas das pessoas usuárias ativas, que nasceram a partir do ano 1990', function () {
  it('Deve retornar os dados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/05_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome completo': 'Pedro', 'Data de nascimento': new Date('1990-01-01') },
      { 'Nome completo': 'Luís', 'Data de nascimento': new Date('2000-01-01') },
      { 'Nome completo': 'Cássia', 'Data de nascimento': new Date('1995-12-01') },
      { 'Nome completo': 'Melissa', 'Data de nascimento': new Date('1997-04-11') }
    ]);
  });
});
    