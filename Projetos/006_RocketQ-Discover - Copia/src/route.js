const express = require('express')

const QuestionController = require('./controllers/QuestionController')

const RoomController = require('./controllers/RoomController')

const route = express.Router()

//Cada uma das minhas rotas das paginas
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

// Formato que o formulario de dentro da modal tem que passar a informação
// route.post('/room/:room/:question/:action')

module.exports = route