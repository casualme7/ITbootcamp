export class Krug {
    constructor(pp) {
        this._poluPrecnik = pp;
    }
    set poluPrecnik(pp) {
        this._poluPrecnik = pp;
    }
    get poluPrecnik() {
        return this._poluPrecnik;
    }
    obimKruga() {
        return ((this.poluPrecnik * 2) * Math.PI)
    }
    povrsinaKruga() {
        return ((this.poluPrecnik ** 2) * Math.PI)
    }
}