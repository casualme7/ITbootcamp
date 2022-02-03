import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let chatRoomArea = document.querySelector(".chat_room_text");
let msgInput = document.querySelector(`.msg_input input[type="text"]`);
let send = document.querySelector(".send");
let changedUsername = document.querySelector("#changedUsername");
let usernameInput = document.querySelector(`.username_input input[type="text"]`);
let update = document.querySelector(".update");
let headerAll = document.querySelector("section ul");

// Objekti klasa / Instance klasa
let username = "Anonymous";
let chatroom = new Chatroom("general", username);
let chat = new ChatUI(chatRoomArea);

// Demonstracija za Local Storage
localStorage.setItem("x", 7);

// Uzimanje vrednosti iz Local Storage
let z = localStorage.localStorageUsername;
if (z) {
    chatroom.username = z
}

// Ispis dokumenata iz db u konzolu
chatroom.getChats(d => {
    console.log(d);
});

// Ispis dokumenata iz db na stranicu
chatroom.getChats((d) => {
    chat.templateDiv(d);
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
        localStorage.setItem("localStorageUsername", usernameInput.value);
        changedUsername.innerText = "Username updated";
        usernameInput.disable = true;
        setTimeout(() => {
            changedUsername.innerText = "";
            usernameInput.disable = true;
            usernameInput.value = "";
        }, 3000)
    }
});

// Klik na dugme da promeni sobu
headerAll.addEventListener("click", (e) => {
    let dugme = e.target;
    if (dugme.tagName === "A") {
        // 1:
        chatroom.room = dugme.innerText.slice(1);
        console.log(chatroom);
        // 2: brisi HTML I konzolu
        chat.delete();
        console.clear();
        // 3: Prikaz konzola:
        chatroom.getChats(d => {
            console.log(d);
        });
        // 4: Prikaze HTML:
        chatroom.getChats((d) => {
            chat.templateDiv(d);
        });
    }
})