export class Student {
    constructor(j, i, p, no, po) {
        this.jmgb = j;
        this.ime = i;
        this.prezime = p;
        this.nizOcena = no;
        this.prosecnaOcena = po;
    }
    set jmgb(j) {
        if (j.length === 13) {
            this._jmgb = j;
        } else {
            this._jmgb = "Error"
        }
    }
    get jmgb() {
        return this._jmgb;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    set prezime(p) {
        this._prezime = p;
    }
    get prezime() {
        return this._prezime;
    }
    set nizOcena(no) {
        this._nizOcena = no;
    }
    get nizOcena() {
        return this._nizOcena;
    }
    set prosecnaOcena(po) {
        let sum = 0;
        let kolko = 0;
        this.nizOcena.forEach(el => {
            kolko++;
            sum += el
        })
        this._prosecnaOcena = sum / kolko
    }
    get prosecnaOcena() {
        return this._prosecnaOcena;
    }
    ispis() {
        console.log(this)
    }
}