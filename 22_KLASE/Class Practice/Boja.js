export class Boja {
    constructor(td, za, int) {
        this.talaznaDuzina = td;
        this.zasicenost = za;
        this.intenzitet = int;
    }
    set talaznaDuzina(td) {
        this._talaznaDuzina = td;
    }
    get talaznaDuzina() {
        return this._talaznaDuzina;
    }
    set zasicenost(za) {
        this._zasicenost = za;
    }
    get zasicenost() {
        return this._zasicenost;
    }
    set intenzitet(int) {
        this._intenzitet = int;
    }
    get intenzitet() {
        return this._intenzitet;
    }
}