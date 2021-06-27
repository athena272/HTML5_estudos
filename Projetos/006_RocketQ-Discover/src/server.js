const express = require('express')
const route = require('./route')
// Caminho do meu computador 
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

// Juntando do meu projeto com o __dirname, que é src com views
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))