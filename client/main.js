import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

socket.on('connect', () => {
    displayMessage(`You connected with id : ${socket.id}`);
});

socket.on('receive-message', (message) => {
    displayMessage(message);
});

const form = document.getElementById("input-form");
const msg_input = document.querySelector(".msg-in");
const msg_snd_btn = document.querySelector(".msg-snd-btn");
const room_name_input = document.querySelector(".room-in");
const join_room_btn = document.querySelector(".join-room-btn");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = msg_input.value;
    const room_name = room_name_input.value;

    if (msg === "") {
        return
    } else {
        displayMessage(msg);
        socket.emit('send-message', msg, room_name);
        msg_input.value = ""
    }
    
});

join_room_btn.addEventListener('click', () => {
    const room = room_name_input.value;
    socket.emit('join-room', room)
});

function displayMessage(message) {
    const div = document.createElement("div");
    div.textContent = message;
    document.querySelector(".container").append(div);
}