const express = require('express')
const app = express()
const http = require('http').createServer(app);

const io = require('socket.io')(http)

app.get('/', ()=>{})

http.listen(8081, ()=>{
    console.log('Servidor rodando')
    console.log('http://localhost:8081')
})