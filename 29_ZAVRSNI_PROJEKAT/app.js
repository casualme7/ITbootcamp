import { Chatroom } from "./chat.js";

let chatroom1 = new Chatroom("general", "Miljan P.");
console.log(chatroom1.room, chatroom1.username) // test getera

chatroom1.username = "Deda Mraz";
console.log(chatroom1.username); // test setera za username

chatroom1.room = "js";
console.log(chatroom1.room); // test setera za username
