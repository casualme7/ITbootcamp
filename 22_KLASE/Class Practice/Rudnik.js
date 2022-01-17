export class Rudnik {
    constructor(i, p) {
        this.ime = i;
        this.plata = p;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    set plata(p) {
        this._plata = p;
    }
    get plata() {
        return this._plata;
    }
    ispis() {
        return `Ime: ${this.ime} Plata: ${this.plata}`
    }
}