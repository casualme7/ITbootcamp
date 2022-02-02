export class ChatUI {
    constructor(e) {
        this.element = e;
    }
    set element(e) {
        this._element = e;
    }
    get element() {
        return this._element;
    }
    getTime(date) {
        let todayDate = new Date();
        //
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        //
        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        hour = String(hour).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        //
        if (todayDate.toLocaleDateString() === date.toLocaleDateString()) {
            return `${hour}:${minutes}`
        } else {
            return `${day}.${month}.${year} - ${hour}:${minutes}`
        }
    }
    templateDiv(data) {
        let time = data.created_at.toDate();
        let newDiv = document.createElement("div");
        newDiv.classList.add("textBubble");
        let newP = document.createElement("p");
        let newSpan = document.createElement("span");
        newSpan.innerText = `${data.username}: `;
        newSpan.classList.add("spanBubble");
        newP.appendChild(newSpan);
        newP.innerHTML += ` ${data.message}`;
        let newP2 = document.createElement("p");
        newP2.innerText = `${this.getTime(time)}`;
        newP2.style.color = "gray";
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        this.element.appendChild(newDiv);
    }
}