const express = require('express');

const Usuario = require('./controllers/usuarios.controller');

const routes = express.Router();

routes.get('/', Usuario.index);

routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);

module.exports = routes;