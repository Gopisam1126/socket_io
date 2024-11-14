const form = document.getElementById("input-form");
// console.log(form);

const msg_input = document.querySelector(".msg-in");
// console.log(msg_input);

const msg_snd_btn = document.querySelector(".msg-snd-btn");
// console.log(msg_snd_btn);

const room_name_input = document.querySelector(".room-in");
// console.log("Room Name : ",room_name_input);

const join_room_btn = document.querySelector(".join-room-btn");
// console.log(join_room_btn);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = msg_input.value;
    // console.log(msg);

    const room_name = room_name_input.value;
    // console.log(room_name);
    

    if (msg === "") {
        return
    } else {
        displayMessage(msg);
        msg_input.value = ""
    }
    
});

join_room_btn.addEventListener('click', () => {
    const room = room_name_input.value
    
});

msg_snd_btn.addEventListener('click', () => {
    const msg = msg_input.value;
    displayMessage(msg)
})

function displayMessage(message) {
    const div = document.createElement("div");
    div.textContent = message;
    document.querySelector(".container").append(div);
}