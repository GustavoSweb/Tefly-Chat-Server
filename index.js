const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http,{cors: {
    origin: 'http://localhost:8080',  // Permitir solicitações apenas do domínio http://localhost:8080
    methods: ['GET', 'POST'],
  }})
var cors = require('cors')

app.use(cors())

io.on('connection', (socket)=>{
    console.log('teste')
    socket.on('msg', (data)=>{
        io.emit('newmsg', data)
    })
})
app.get('/', (req, res)=>{
    res.send('Ola')
})

http.listen(8081, ()=>{
    console.log('Servidor rodando')
    console.log('http://localhost:8081')
})