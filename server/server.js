const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', '/public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

  //Server
app.use(express.static(publicPath));

io.on(`connection`, (socket) => {
  console.log('New user connected.');

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey, what is going on?',
    createAt: 123
  });

  socket.emit('newMessage', {
    from: 'miemiedi',
    text: 'Hey, this is a new message',
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage.', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected.');
  });

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
})
