const express = require('express')
const QuestionControler = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

route.get('/room/:room', (req, res) => res.render('room'))

//Formato que o formulario de dentro da modal tem que passa a informação
route.post('/question/:room/:question/:action', QuestionControler.index)
route.post('/create-room', RoomController.create)

module.exports = route
