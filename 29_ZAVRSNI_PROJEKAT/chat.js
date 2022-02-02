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
        let modifiedUn = un.trim();
        if (modifiedUn.length >= 2 && modifiedUn.length <= 10) {
            this._username = modifiedUn;
        } else {
            alert("Username is not valid! (2-10 characters please)")
        }
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
    getChats(callback) {
        this.chats.where("room", "==", this.room).orderBy("created_at", "asc").onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    callback(change.doc.data());
                }
            })
        })
    }
    updateUsername(newUser) {
        this.username = newUser;
    }
    updateRoom(newRoom) {
        this.room = newRoom;
    }
}