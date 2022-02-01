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
}