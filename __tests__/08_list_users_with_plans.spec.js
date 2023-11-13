const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('08 - Escreva uma query que retorne o nome, e-mail e plano das pessoas usuárias. Ordene o resultado pelo nome da pessoa em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/08_challenge.sql');
    expect(result).toStrictEqual([
      { 'Nome completo': 'Andressa', 'E-mail': 'andressa@trybefy.com', 'Plano': 'Trimestral' },
      { 'Nome completo': 'Camila', 'E-mail': 'camila@trybefy.com', 'Plano': 'Anual'},
      { 'Nome completo': 'Cássia', 'E-mail': 'cassia@trybefy.com', 'Plano': 'Anual' },
      { 'Nome completo': 'Guilherme', 'E-mail': 'guilherme@trybefy.com' , 'Plano': 'Mensal'},
      { 'Nome completo': 'Júlio', 'E-mail': 'julio@trybefy.com', 'Plano': 'Mensal'},
      { 'Nome completo': 'Luís', 'E-mail': 'luis@trybefy.com', 'Plano': 'Mensal' },
      { 'Nome completo': 'Melissa', 'E-mail': 'melissa@trybefy.com', 'Plano': 'Mensal'},
      { 'Nome completo': 'Pedro', 'E-mail': 'pedro@trybefy.com', 'Plano': 'Anual'},
      { 'Nome completo': 'Rogério', 'E-mail': 'rogerio@trybefy.com', 'Plano': 'Trimestral' },
      { 'Nome completo': 'Simone', 'E-mail': 'simone@trybefy.com', 'Plano': 'Anual' }
    ]);
  });
});
    