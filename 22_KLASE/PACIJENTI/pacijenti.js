export class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    // Seter za ime
    set ime(i) {
        let i1 = i.trim();
        if (i1.length > 0) {
            this._ime = i1;
        } else {
            this._ime = "Ime pacijenta?"
        }
    }
    // Geter za ime
    get ime() {
        return this._ime;
    }
    // Seter za visinu
    set visina(v) {
        if (v > 0 && v < 2.5) {
            this._visina = v
        } else {
            this._visina = 0.5; // Zabave radi
        }
    }
    // geter za visinu
    get visina() {
        return this._visina;
    }
    // Seter za tezinu
    set tezina(t) {
        if (t > 0 && t < 255) {
            this._tezina = t;
        } else {
            this._tezina = 10; // Zabave radi
        }
    }
    // Geter za tezinu
    get tezina() {
        return this._tezina;
    }
    stampaj() {
        return `Ime: ${this.ime}; Visina: ${this.visina} m; Tezina: ${this.tezina} kg;`
        // console.log(this);
    }
    stampajListu() {
        let htmlLista = `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`
        return htmlLista;
    }
    bmi() {
        let bmi = this.tezina / this.visina ** 2;
        return bmi.toFixed(2);
    }
    kritican() {
        let kriticanDaNe = this.bmi();
        if (kriticanDaNe < 15 || kriticanDaNe > 40) {
            return true;
        } else {
            return false
        }
    }
}