import { configDotenv } from 'dotenv';
import express from 'express';
import http from 'node:http';
import { Server } from 'socket.io';

configDotenv();
const {
    PORT = 3000,
    HOST = 'localhost',
    URI = 'mongodb://localhost:27017/digitalers',
} = process.env

const app = express();
const server = http.createServer(app);
const ws = new Server(server);

// Conexion del cliente
ws.on('connection', (socket) => {
    console.log(`se ha conectado el cliente ${socket.id}`)
    ws.emit('loaded', { id: socket.id } );
    // Evento disparado por el Cliente
    socket.on('login', (data) => {
        
    })
    socket.on('message', (data) => {
        ws.emit('message', data) // Accion en respuesta al evento (BROADCAST)
    })
    // Desconexion del Cliente
    socket.on('disconnect', () => {
        console.log(`se ha desconectado el cliente ${socket.id}`)
    })
})
app.use(express.static('public'))
server.listen(PORT, () => console.log(`service running on https://${HOST}:${PORT}`));