const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('18 - Escreva uma query que retorne as músicas que possuem no máximo 4 minutos de duração. Ordene o resultado pela duração da música em ordem crescente', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] =  await runQuery('../../src/18_challenge.sql');
    expect(result).toStrictEqual([
      { 'Título': 'With a Little Help from My Friends', 'Duração': 162 },
      { 'Título': 'Intro: Persona', 'Duração': 180 },
      { 'Título': 'Love Me or Leave Me', 'Duração': 182 },
      { 'Título': 'I Want a Little Sugar in My Bowl', 'Duração': 188 },
      { 'Título': 'Do I Move You?', 'Duração': 189 },
      { 'Título': 'Ando Meio Desligado', 'Duração': 197 },
      { 'Título': 'The Girl Is Mine', 'Duração': 206 },
      { 'Título': 'Jamais Vu', 'Duração': 209 },
      { 'Título': 'Lucy in the Sky with Diamonds', 'Duração': 211 },
      { 'Título': 'Make It Right', 'Duração': 221 },
      { 'Título': 'Black or White', 'Duração': 222 },
      { 'Título': 'I Put a Spell on You', 'Duração': 225 },
      { 'Título': 'Boy With Luv', 'Duração': 229 },
      { 'Título': 'Remember the Time', 'Duração': 233 },
      { 'Título': 'Ovelha Negra', 'Duração': 234 }
    ]);
  });
});
    