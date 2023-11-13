const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('20 - Escreva uma query que retorne o nome da pessoa artista, seus álbuns e suas respectivas músicas, mas apenas de artistas que não são The Beatles. Ordene o resultado pelo nome da pessoa artista, em caso de empate, ordene pelo título do álbum e se o empate persistir, ordene pelo título da música,todos estes casos em ordem alfabética', function () {
  it('Deve retornar os dados ordenados conforme a tabela do README', async function () {
    await connection.query('DROP DATABASE IF EXISTS Trybefy;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/10_challenge.sql');
    await runQuery('../../src/16_challenge.sql');
    const [result] =  await runQuery('../../src/20_challenge.sql');
    expect(result).toStrictEqual([
      {
        'Artista': 'BTS',
        'Álbum': 'Map of the Soul: 7',
        'Música': 'Boy With Luv'
      },
      {
        'Artista': 'BTS',
        'Álbum': 'Map of the Soul: 7',
        'Música': 'Intro: Persona'
      },
      {
        'Artista': 'BTS',
        'Álbum': 'Map of the Soul: 7',
        'Música': 'Jamais Vu'
      },
      {
        'Artista': 'BTS',
        'Álbum': 'Map of the Soul: 7',
        'Música': 'Make It Right'
      },
      { 'Artista': 'Michael Jackson', 'Álbum': 'Bad', 'Música': 'Bad' },
      { 'Artista': 'Michael Jackson', 'Álbum': 'Bad', 'Música': 'Dirty Diana' },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Bad',
        'Música': "I Just Can't Stop Loving You"
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Bad',
        'Música': 'Man in the Mirror'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Bad',
        'Música': 'Smooth Criminal'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Bad',
        'Música': 'The Way You Make Me Feel'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Dangerous',
        'Música': 'Black or White'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Dangerous',
        'Música': 'Remember the Time'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Thriller',
        'Música': 'Beat It'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Thriller',
        'Música': 'Billie Jean'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Thriller',
        'Música': 'The Girl Is Mine'
      },
      {
        'Artista': 'Michael Jackson',
        'Álbum': 'Thriller',
        'Música': 'Thriller'
      },
      {
        'Artista': 'Nina Simone',
        'Álbum': 'I Put a Spell on You',
        'Música': 'I Put a Spell on You'
      },
      {
        'Artista': 'Nina Simone',
        'Álbum': 'I Put a Spell on You',
        'Música': 'Love Me or Leave Me'
      },
      {
        'Artista': 'Nina Simone',
        'Álbum': 'Sings the Blues',
        'Música': 'Do I Move You?'
      },
      {
        'Artista': 'Nina Simone',
        'Álbum': 'Sings the Blues',
        'Música': 'I Want a Little Sugar in My Bowl'
      },
      {
        'Artista': 'Rita Lee',
        'Álbum': 'Entradas e Bandeiras',
        'Música': 'Ando Meio Desligado'
      },
      {
        'Artista': 'Rita Lee',
        'Álbum': 'Entradas e Bandeiras',
        'Música': 'Ovelha Negra'
      }
    ]);
  });
});
