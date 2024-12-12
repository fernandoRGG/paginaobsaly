// const WebSocket = require('ws');
// const port = process.env.PORT || 8080;  // Usa el puerto de Render o 8080 si estás en local
// const wss = new WebSocket.Server({ port });

// let clients = [];

// wss.on('connection', (ws) => {
//     console.log('Nuevo cliente conectado');
//     clients.push(ws);

//     ws.on('message', (message) => {
//         console.log('Mensaje recibido:', message);

//         // Reenviar el mensaje a todos los clientes conectados
//         clients.forEach(client => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(message);
//             }
//         });
//     });

//     ws.on('close', () => {
//         console.log('Cliente desconectado');
//         clients = clients.filter(client => client !== ws);
//     });
// });

// console.log(`Servidor WebSocket iniciado en ws://localhost:${port}`);
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'alycuatro.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});