const express = require('express');
const app = express();
const {createServer} = require('http');
const server = createServer(app);

const { Server } = require('socket.io');
const porta = 3001;

const io = new Server(server, {
    cors: {
        origin: 'https://localhost:3000',
    }
});

io.on('connection', (socket) => {
    console.log(`Usuário Conectado: ${socket.id}`);

    socket.on('entrou_na_sala', ({ sala, nome }) => {
        socket.join(sala);
    });

    socket.on('enviou_mensagem', ({ sala, nome, mensagem }) => {
        socket.to(sala).emit('recebeu_mensagem', { nome, mensagem });
        /*const data = { nome: nome, mensagem: mensagem };
        socket.to(sala).emit('recebeu_mensagem', data);*/
    });
});

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});