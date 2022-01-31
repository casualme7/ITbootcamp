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

}