import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom1 = new Chatroom("js", "Deda Mraz");
console.log(chatroom1.room, chatroom1.username) // test getera



chatroom1.username = "Miljan P";
console.log(chatroom1.username); // test setera za username

chatroom1.room = "general";
console.log(chatroom1.room); // test setera za username

chatroom1.getChats(d => {
    console.log(d);
});

let chatRoomArea = document.querySelector(".chat_room_text");
let chat1 = new ChatUI(chatRoomArea);
console.log(chat1);

chatroom1.getChats((d) => {
    chat1.templateDiv(d);
});

let msgInput = document.querySelector(`.msg_input input[type="text"]`);
let send = document.querySelector(".send");
let changedUsername = document.querySelector("#changedUsername");


let inputInfo = (variable, text, border) => {
    variable.style.border = border;
    variable.placeholder = text;
};

send.addEventListener("click", () => {
    if (msgInput.value.trim() !== "") {
        inputInfo(msgInput, "Your message", "2px solid black");
        chatroom1.addChat(msgInput.value).then(() => {
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

let usernameInput = document.querySelector(`.username_input input[type="text"]`);
let update = document.querySelector(".update");

update.addEventListener("click", () => {
    let userX = usernameInput.value;
    chatroom1.updateUsername(userX);
    if (userX.length >= 2 && userX.length <= 10) {
        changedUsername.innerText = "Username updated";
        usernameInput.disable = true;
        setTimeout(() => {
            changedUsername.innerText = "";
            usernameInput.disable = true;
        }, 3000)
    }
});