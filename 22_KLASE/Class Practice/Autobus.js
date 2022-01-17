export class Autobus {
    constructor(rb, sed) {
        this.registarskiBroj = rb;
        this.sedista = sed;
    }
    set registarskiBroj(rb) {
        this._registarskiBroj = rb;
    }
    get registarskiBroj() {
        return this._registarskiBroj;
    }
    set sedista(sed) {
        this._sedista = sed;
    }
    get sedista() {
        return this._sedista;
    }
    ispis() {
        console.log(`Registarski broj: ${this.registarskiBroj} , sedista: ${this.sedista}`);
    }
}