export class Datum {
    constructor(d, m, g) {
        this.dan = d;
        this._mesec = m;
        this._godina = g;
    }
    set dan(d) {
        this._dan = d;
    }
    get dan() {
        return this._dan;
    }
    set mesec(m) {
        this._mesec = m;
    }
    get mesec() {
        return this._mesec;
    }
    set godina(g) {
        this._godina = g;
    }
    get godina() {
        return this._godina;
    }
    ispis() {
        console.log(`${this.dan} ${this.mesec} ${this.godina}`)
    }
}