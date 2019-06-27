# CRUD NODEJS


Projeto CRUD desenvolvido em Javascript com os seguintes recursos/ferramentas:

  - [Node.js] - usado para fazer o lado servidor da app.
  - [Express] - módulo nodejs usado para criar servidor http.
  - [mariaDB] - SGBD usada para criação do banco de dados.
  - [sequelizejs] - ORM nodejs usado para realizar as transações.
 
# Como utilizar

  - Clonar o repositório git em qualquer diretório.
  - Executar o script SQL 'db.sql' que acompanha o projeto.

Também é possível:
  - Usar o nodemon para atualizar a aplicação node.
  - Utilizar qualquer ferramenta de gestão de API para GET, POST, PUT, DELETE.
    

## Usando Postman

Foi utilizado o Postman para fazer as requests e responses, uma vez que não foi feita interface.

Postman: https://www.getpostman.com

### Instalação

A aplicação requer [Node.js](https://nodejs.org/) para funcionar.


```sh
$ cd crudlabdb
$ node app.js
```
Comando para criação e inserção do banco de dados.
```sh
$ mysql -u root -p
$ source $USERDIR/db.sql
```
OBS: MODIFICAR config/env.js E TROCAR O USERNAME E SENHA SE NECESSÁRIO.
OBS2: ao realizar o source do script serão inseridos 10 alunos.
### URLS (REQ. E RES.)

| Plugin | README |
| ------ | ------ |
| GET (SELECT) | api/alunos |
| GET BY ID (SELECT BY ID)| api/alunos/ID |
| POST (CREATE)| api/alunos/criar |
| PUT (UPDATE)| api/alunos/ID |
| DELETE (DELETE)| api/alunos/ID |

   [node.js]: <http://nodejs.org>
   [MariaDB]: <https://mariadb.org>
   [sequelizejs]: <http://docs.sequelizejs.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
