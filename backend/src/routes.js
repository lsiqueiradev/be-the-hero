const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rotas de sessions
routes.post('/sessions',SessionController.create);

//Rotas das Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rotas dos casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

//Rotas do profile
routes.get('/profile', ProfileController.index);

module.exports = routes;