export class Plivac {
    constructor(i, gr, nr) {
        this.ime = i;
        this.godinaRodjenja = gr;
        this.najboljiRezultat = nr;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    set godinaRodjenja(gr) {
        this._godinaRodjenja = gr;
    }
    get godinaRodjenja() {
        return this._godinaRodjenja;
    }
    set najboljiRezultat(nr) {
        this._najboljiRezultat = nr;
    }
    get najboljiRezultat() {
        return this._najboljiRezultat;
    }
    ispisi() {
        console.log(this);
    }
}