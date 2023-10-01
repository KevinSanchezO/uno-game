const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server, {
    cors: { origin: '*' }
})

io.on('connection', (socket) => {
    console.log("conectado un cliente")
})

"npm run dev para arrancar el servidor"
server.listen(3000);