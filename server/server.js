const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:5173"]
    },
});

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('send-message', (message) => {
        io.emit('receive-message', message)
        // console.log(message);
    });
});