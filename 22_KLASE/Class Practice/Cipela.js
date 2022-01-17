export class Cipela {
    constructor(n, bc, np) {
        this.naziv = n;
        this.brojCipela = bc;
        this.nizPrepravki = np;
    }
    set naziv(n) {
        this._naziv = n;
    }
    get naziv() {
        return this._naziv;
    }
    set brojCipela(bc) {
        this._brojCipela = bc;
    }
    get brojCipela() {
        return this._brojCipela;
    }
    set nizPrepravki(np) {
        this._nizPrepravki = np;
    }
    get nizPrepravki() {
        return this._nizPrepravki;
    }
    zalepi() {
        console.log(`${this.naziv} - Zalepljena cipela`)
    }
    prosiri() {
        console.log(`${this.naziv} - Prosirena cipela`)
    }
    usij() {
        console.log(`${this.naziv} - Usivena cipela`)
    }
}