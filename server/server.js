const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:5173"]
    },
});

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('send-message', (message, room_name) => {
        if (room_name === "") {
            socket.broadcast.emit('receive-message', message)
        } else {
            socket.to(room_name).emit('receive-message', message)
        }

        // console.log(message);
        
    });
    socket.on('join-room', (room) => {
        socket.join(room)
    })
});