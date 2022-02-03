import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM

let chatRoomArea = document.querySelector(".chat_room_text");
let msgInput = document.querySelector(`.msg_input input[type="text"]`);
let send = document.querySelector(".send");
let changedUsername = document.querySelector("#changedUsername");
let usernameInput = document.querySelector(`.username_input input[type="text"]`);
let update = document.querySelector(".update");

// Objekti klasa / Instance klasa
let chatroom = new Chatroom("general", "Anonymous");
let chat1 = new ChatUI(chatRoomArea);

// Ispis dokumenata iz db u konzolu
chatroom.getChats(d => {
    console.log(d);
});

// Ispis dokumenata iz db na stranicu
chatroom.getChats((d) => {
    chat1.templateDiv(d);
});

// Mala funkcijica za uredjivanje texta-bordera-inputa.
let inputInfo = (variable, text, border) => {
    variable.style.border = border;
    variable.placeholder = text;
};

// Dugme send za ispis nove poruke.
send.addEventListener("click", () => {
    if (msgInput.value.trim() !== "") {
        inputInfo(msgInput, "Your message", "2px solid black");
        chatroom.addChat(msgInput.value).then(() => {
            msgInput.value = "";
            console.log("Chat added successfully!");
        }).catch(err => {
            console.log("ERROR:", err);
        });
    } else {
        inputInfo(msgInput, "Enter a valid message", "2px solid red");
        msgInput.value = "";
    }
});

// Dugme update za update-ovanje novog username-a
update.addEventListener("click", () => {
    let userX = usernameInput.value;
    chatroom.updateUsername(userX);
    if (userX.length >= 2 && userX.length <= 10) {
        changedUsername.innerText = "Username updated";
        usernameInput.disable = true;
        setTimeout(() => {
            changedUsername.innerText = "";
            usernameInput.disable = true;
            usernameInput.value = "";
        }, 3000)
    }
});