export class Chatroom {
    constructor(r, un) {
        this.room = r;
        this.username = un;
        this.chats = db.collection("chats");
    }
    set room(r) {
        this._room = r;
    }
    get room() {
        return this._room;
    }
    set username(un) {
        this._username = un;
    }
    get username() {
        return this._username;
    }
    async addChat(text) {
        let data = new Date();
        let docChat = {
            message: text,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(data)
        }
        let response = await this.chats.add(docChat);
        return response;
    }
}