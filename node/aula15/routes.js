const express =  require('express');
const route =  express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req,res,next) {
    console.log('')
    console.log('Passei na sua middleware')
    console.log('')
    next()
}

//Rotas home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost)


//Rotas contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;