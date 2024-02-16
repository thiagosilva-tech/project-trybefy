## Projeto Trybefy
Este projeto envolve a criação de SQL para diferentes querys de uma aplicação de lista de musicas, artistas e albuns. Abaixo estão listados os requisitos obrigatórios e o requisito bônus do projeto:

#### Tecnologias Utilizadas

- MySQL
- SQL
- Docker
- Docker-compose

### Requisitos do Projeto

#### Primeiro passo da modelagem - Pessoas usuárias e Planos

1. **Crie uma base de dados chamada Trybefy:** Execute o comando para criar o banco de dados `Trybefy`.
2. **Crie e popule as tabelas plans e users:** Crie e popule as tabelas `plans` e `users`.
3. **Retorne o nome e email de todas as pessoas usuárias:** Escreva uma query que retorne o nome e email de todas as pessoas usuárias.
4. **Retorne o nome e email apenas das pessoas usuárias ativas:** Escreva uma query que retorne o nome e email apenas das pessoas usuárias ativas.
5. **Retorne o nome e data de nascimento das pessoas usuárias ativas nascidas a partir de 1990:** Escreva uma query que retorne o nome e data de nascimento apenas das pessoas usuárias ativas, que nasceram a partir do ano 1990.
6. **Atualize dados da tabela users:** Escreva queries para atualizar dados da tabela `users`.
7. **Remova o plano trimestral:** Escreva queries para remover o plano trimestral.
8. **Retorne o nome, e-mail e plano das pessoas usuárias:** Escreva uma query que retorne o nome, e-mail e plano das pessoas usuárias. Ordene o resultado pelo nome da pessoa em ordem alfabética.
9. **Retorne os planos com seus respectivos totais de pessoas vinculadas:** Escreva uma query que retorne os planos com seus respectivos totais de pessoas vinculadas. Ordene o resultado pelo plano em ordem alfabética.

#### Segundo passo da modelagem - Artistas e Álbuns

10. **Crie e popule as tabelas artists e albums:** Crie e popule as tabelas `artists` e `albums`.
11. **Retorne o nome e ano de lançamento do álbum, juntamente com o nome da pessoa artista:** Escreva uma query que retorne o nome e ano de lançamento do álbum, juntamente com o nome da pessoa artista, mas apenas para álbuns que possuam a palavra "you". Ordene o resultado pelo ano de lançamento de forma crescente.
12. **Retorne o nome das pessoas artistas e a quantidade de álbuns que cada uma possui:** Escreva uma query que retorne o nome das pessoas artistas e a quantidade de álbuns que cada uma possui. Ordene o resultado pelas pessoas que possuem mais álbuns e em caso de empate, ordene pelo nome da pessoa artista, em ordem alfabética.
13. **Retorne o nome das pessoas artistas que possuem pelo menos três álbuns cadastrados:** Escreva uma query que retorne o nome das pessoas artistas que possuem pelo menos três álbuns cadastrados. Ordene o resultado pelo nome da pessoa em ordem alfabética.
14. **Retorne o nome das pessoas artistas e seus respectivos álbuns:** Escreva uma query que retorne o nome das pessoas artistas e seus respectivos álbuns. Ordene o resultado pelo nome da pessoa em ordem alfabética.
15. **Remova álbuns lançados entre 1970 e 1979:** Escreva uma query para remover álbuns lançados entre 1970 e 1979.

#### Terceiro passo da modelagem - Músicas

16. **Crie e popule a tabela songs:** Crie e popule a tabela `songs`.
17. **Retorne os títulos das músicas do álbum Thriller:** Escreva uma query que retorne os títulos das músicas do álbum Thriller. Ordene o resultado pelo título em ordem alfabética.
18. **Retorne as músicas com no máximo 4 minutos de duração:** Escreva uma query que retorne as músicas que possuem no máximo 4 minutos de duração. Ordene o resultado pela duração da música em ordem crescente.
19. **Retorne o nome da pessoa artista, título do álbum e duração da música:** Escreva uma query que retorne o nome da pessoa artista, título do álbum e duração da música, mas apenas das músicas que possuem entre 5 e 8 minutos de duração. Ordene o resultado pela duração da música em ordem crescente.
20. **Retorne o nome da pessoa artista, seus álbuns e suas respectivas músicas:** Escreva uma query que retorne o nome da pessoa artista, seus álbuns e suas respectivas músicas, mas apenas de artistas que não são The Beatles. Ordene o resultado pelo nome da pessoa artista, em caso de empate, ordene pelo título do álbum e se o empate persistir, ordene pelo título da música, todos estes casos em ordem alfabética.
21. **Retorne o nome dos álbuns e a soma da duração de todas as suas músicas em segundos:** Escreva uma query que retorne o nome dos álbuns e a soma da duração de todas as suas músicas em segundos. Ordene o resultado pela soma das durações, da maior para a menor.
22. **Retorne o nome das pessoas artistas e a quantidade de músicas feitas por ela:** Escreva uma query que retorne o nome das pessoas artistas e a quantidade de músicas feitas por ela, mas exiba apenas as três primeiras pessoas com mais músicas cadastradas. Ordene o resultado pelas pessoas que mais têm músicas cadastradas e em caso de empate, ordene pelo nome da pessoa, em ordem alfabética.

#### Quarto passo da modelagem - Histórico de reprodução

23. **Crie e popule a tabela history_play_songs:** Crie e popule a tabela `history_play_songs`.
24. **Retorne o nome das pessoas usuárias e a quantidade de músicas reproduzidas por ela:** Escreva uma query que retorne o nome das pessoas usuárias e a quantidade de músicas reproduzidas por ela. Ordene o resultado pela maior quantidade de reprodução e em caso de empate, ordene pelo nome da pessoa, em ordem alfabética.
25. **Retorne o nome dos álbuns e a quantidade de músicas reproduzidas daquele álbum:** Escreva uma query que retorne o nome dos álbuns e a quantidade de músicas reproduzidas daquele álbum, mas exiba apenas os cinco primeiros resultados. Ordene o resultado pela maior quantidade de reprodução e em caso de empate, ordene pelo nome do álbum, em ordem alfabética.
26. **Retorne o nome da pessoa artista e a quantidade de músicas reproduzidas da pessoa:** Escreva uma query que retorne o nome da pessoa artista e a quantidade de músicas reproduzidas da pessoa, mas apenas artistas que possuem mais do que 10 músicas reproduzidas. Ordene o resultado pelo nome da pessoa em ordem alfabética.

#### Quinto passo da modelagem - Controle de seguidores

27. **Crie e popule a tabela artists_followers:** Crie e popule a tabela `artists_followers`.
28. **Retorne o nome das pessoas usuárias e o total das pessoas artistas que ela segue:** Escreva uma query que retorne o nome das pessoas usuárias e o total das pessoas artistas que ela segue. Ordene o resultado pelo nome das pessoas usuárias, em ordem alfabética.
29. **Retorne o nome da pessoa artista com mais seguidores:** Escreva uma query que retorne o nome da pessoa artista com mais seguidores.
30. **Retorne o nome da pessoa artista e o total de pessoas seguidoras que ela possui:** Escreva uma query que retorne o nome da pessoa artista e o total de pessoas seguidoras que ela possui, mas apenas artistas que possuem menos de 5 seguidores.

### Conclusão

O projeto Trybefy é um sistema de gerenciamento de músicas que abrange desde a criação de usuários e planos até a análise de reprodução e seguidores de artistas. A modelagem do banco de dados aborda diversos aspectos, como perfis de usuários, catalogação de músicas, histórico de reprodução e interações entre usuários e artistas. A implementação desses requisitos permite a construção de uma aplicação robusta e funcional para os usuários explorarem e desfrutarem de sua biblioteca musical.
