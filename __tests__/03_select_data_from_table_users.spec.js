const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('03 - Escreva uma query que retorne o nome e email de todas as pessoas usuárias', function () {
  it('Deve retornar os dados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/03_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome completo': 'Pedro', 'E-mail': 'pedro@trybefy.com' },
      { 'Nome completo': 'Camila', 'E-mail': 'camila@trybefy.com' },
      { 'Nome completo': 'Guilherme', 'E-mail': 'guilherme@trybefy.com' },
      { 'Nome completo': 'Andressa', 'E-mail': 'andressa@trybefy.com' },
      { 'Nome completo': 'Luís', 'E-mail': 'luis@trybefy.com' },
      { 'Nome completo': 'Cássia', 'E-mail': 'cassia@trybefy.com' },
      { 'Nome completo': 'Simone', 'E-mail': 'simone@trybefy.com' },
      { 'Nome completo': 'Rogério', 'E-mail': 'rogerio@trybefy.com' },
      { 'Nome completo': 'Júlio', 'E-mail': 'julio@trybefy.com' },
      { 'Nome completo': 'Melissa', 'E-mail': 'melissa@trybefy.com' }
    ]);
  });
});
    