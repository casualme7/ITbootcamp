import { Chatroom } from "./chat.js";

let chatroom1 = new Chatroom("js", "Deda Mraz");
console.log(chatroom1.room, chatroom1.username) // test getera

chatroom1.username = "Miljan P";
console.log(chatroom1.username); // test setera za username

chatroom1.room = "general";
console.log(chatroom1.room); // test setera za username

chatroom1.addChat("Drugi text dodat iz JS fajla").then(() => {
    console.log("Chat added successfully!");
}).catch(err => {
    console.log("ERROR:", err);
});

chatroom1.getChats(d => {
    console.log(d);
});