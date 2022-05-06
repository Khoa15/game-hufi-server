const express = require('express')
const http = require('http')
const { getUpdatedVelocity } = require('./game')
const { Server } = require('socket.io')
const app = express()
const server = http.createServer(app)
const port = 5000
const io = new Server(server,{
    cors:{
        origin: "*"
    }
})

app.get('/', (req, res)=>{
    res.send("<h1>Server is running</h1>")
})

io.on('connection', (socket)=>{
    console.log('A user connected')
    let allUser = socket;
    socket.join(5)
    console.log(io.sockets.adapter.rooms[5])
    socket.on('keydown', (keyCode)=>{
        const vel = getUpdatedVelocity(keyCode)
    })
})

server.listen(port, ()=>{
    console.log(`Server is listenning ${port}`)
})