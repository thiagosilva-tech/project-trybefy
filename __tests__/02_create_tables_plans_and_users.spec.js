
const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('02 - Crie e popule as tabelas `plans` e `users`', function () {
  it('A tabela "plans" deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "plans"');
    expect(result.length).toBe(1);
  });

  it('A tabela "plans" deve ter a coluna id como tipo inteiro, chave primária, não nula e auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM plans');
    expect(result).toContainEqual({
        Field: 'id',
        Type: 'int',
        Null: 'NO',
        Key: 'PRI',
        Default: null,
        Extra: 'auto_increment'
    });
  });

  it('A tabela "plans" deve ter a coluna name como tipo varchar(50), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM plans');
   
    expect(result).toContainEqual({
        Field: 'name',
        Type: 'varchar(50)',
        Null: 'NO',
        Key: '',
        Default: null,
        Extra: ''
    });
  });
  
  it('A tabela "plans" deve ter a coluna price como tipo FLOAT(5,2), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM plans');

    expect(result).toContainEqual({
        Field: 'price',
        Type: 'float(5,2)',
        Null: 'NO',
        Key: '',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela "plans" deve estar populada com os planos', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SELECT * FROM plans');

    expect(result).toStrictEqual([
      { id: 1, name: 'Anual', price: 39.90 },
      { id: 2, name: 'Mensal', price: 5.90 },
      { id: 3, name: 'Trimestral', price: 19.90 },
    ]);
  });  

  it('A tabela "users" deve ser criada', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "users"');
    expect(result.length).toBe(1);
  });

  it('A tabela "users" deve ter a coluna id como tipo inteiro, chave primária, não nula e auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql'); 
    const [result] = await connection.query('SHOW COLUMNS FROM users'); 
    expect(result).toContainEqual({ Field: 'id', Type: 'int', Null: 'NO', Key: 'PRI', Default: null, Extra: 'auto_increment' }); 
  });

  it('A tabela "users" deve ter a coluna full_name como tipo varchar(50), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM users');
    expect(result).toContainEqual({ Field: 'full_name', Type: 'varchar(50)', Null: 'NO', Key: '', Default: null, Extra: '' }); 
  });

  it('A tabela "users" deve ter a coluna email como tipo varchar(50), não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM users');
    expect(result).toContainEqual({ Field: 'email', Type: 'varchar(50)', Null: 'NO', Key: '', Default: null, Extra: '' }); 
  });

  it('A tabela "users" deve ter a coluna birthday como tipo date, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM users');
    expect(result).toContainEqual({ Field: 'birthday', Type: 'date', Null: 'NO', Key: '', Default: null, Extra: '' });
  });

  it('A tabela "users" deve ter a coluna active como tipo boolean, não nula e com valor padrão igual a 1', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM users');
    expect(result).toContainEqual({ Field: 'active', Type: 'tinyint(1)', Null: 'NO', Key: '', Default: '1', Extra: '' });
  });

  it('A tabela "users" deve ter a coluna plan_id como tipo inteiro, não nula', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM users');
    expect(result).toContainEqual({ Field: 'plan_id', Type: 'int', Null: 'NO', Key: 'MUL', Default: null, Extra: '' });
  });

  it('A tabela "users" deve ser capaz de criar uma relação com a tabela "plans" de forma correta', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE users');
    expect(result['Create Table']).toContain('FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`)');
  });

  
  it('A tabela "users" deve estar populada com as pessoas usuárias corretas', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SELECT id, full_name, email, birthday, active, plan_id FROM users');
    expect(result).toStrictEqual([
      { id: 1, full_name: 'Pedro', email: 'pedro@trybefy.com', birthday: new Date('1990-01-01'), active: 1, plan_id: 1 },
      { id: 2, full_name: 'Camila', email: 'camila@trybefy.com', birthday: new Date('1988-12-01'), active: 1, plan_id: 1 },
      { id: 3, full_name: 'Guilherme', email: 'guilherme@trybefy.com', birthday: new Date('1988-12-01'), active: 1, plan_id: 2 },
      { id: 4, full_name: 'Andressa', email: 'andressa@trybefy.com', birthday: new Date('1984-07-20'), active: 0, plan_id: 3 },
      { id: 5, full_name: 'Luís', email: 'luis@trybefy.com', birthday: new Date('2000-01-01'), active: 1, plan_id: 2 },
      { id: 6, full_name: 'Cássia', email: 'cassia@trybefy.com', birthday: new Date('1995-12-01'), active: 1, plan_id: 1 },
      { id: 7, full_name: 'Simone', email: 'simone@trybefy.com', birthday: new Date('1988-12-01'), active: 1, plan_id: 1 },
      { id: 8, full_name: 'Rogério', email: 'rogerio@trybefy.com', birthday: new Date('1979-12-01'), active: 1, plan_id: 3 },
      { id: 9, full_name: 'Júlio', email: 'julio@trybefy.com', birthday: new Date('1994-06-20'), active: 0, plan_id: 2 },
      { id: 10, full_name: 'Melissa', email: 'melissa@trybefy.com', birthday: new Date('1997-04-11'), active: 1, plan_id: 2 }
    ]);
  });
});