export class FMRadio {
    constructor(s, f, jt) {
        this.stanica = s;
        this.frekvencija = f;
        this.jacinaTona = jt;
    }
    set stanica(s) {
        this._stanica = s;
    }
    get stanica() {
        return this._stanica;
    }
    set frekvencija(f) {
        if (f >= 87.5 && f <= 108) {
            this._frekvencija = f;
        } else {
            this._frekvencija = "Netacna Frekvencija"
        }
    }
    get frekvencija() {
        return this._frekvencija;
    }
    set jacinaTona(jt) {
        if (jt >= 0 && jt <= 20) {
            this._jacinaTona = jt;
        } else {
            this._jacinaTona = "Natacna Jacina Tona"
        }
    }
    get jacinaTona() {
        return this._jacinaTona;
    }
    promeniZvuk(x) {
        if (x === "+") {
            this._jacinaTona++;
            if (this._jacinaTona > 20) {
                this._jacinaTona = 20;
            }
        } else if (x == "-") {
            this._jacinaTona--;
            if (this._jacinaTona < 0) {
                this._jacinaTona = 0;
            }
        }
    }
    frekvencijaIskljuci() {
        this._frekvencija = 87.5;
    }
}