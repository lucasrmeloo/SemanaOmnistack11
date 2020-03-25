const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionController.create)

module.exports = routes;




/**
 * Rotas e recursos
 */

 /**
  * Métodos HTTP:
  * GET: Buscar uma informação no backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota ( /users?name=Lucas ou /users?name=Lucas&age=20 ) ("?") filtros, páginas //request.query
 * Route Params: Parâmetros utilizados para identificar recursos (único recurso) //request.params
 * Request Body: Corpo da requisiçãom utilizado para criar ou alterar recursos //request.body
 */

 /**
  * Banco de dados:
  * 
  * SQL: MySQL, SQLite, PostageSQL, Oracle, Microsoft SQL Server, etc
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Configurando banco de dados dentro da aplicação
 * Instalar o driver: Select * FROM users
 * Query Builder: table('users').select('*').where
 */