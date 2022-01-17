export class Automobil {
    constructor(maxB, minB, currentB) {
        this.maxBrzina = maxB;
        this.minBrzina = minB;
        this.trenutnaBrzina = currentB;
    }
    set maxBrzina(maxB) {
        this._maxBrzina = maxB;
    }
    get maxBrzina() {
        return this._maxBrzina;
    }
    set minBrzina(minB) {
        this._minBrzina = minB;
    }
    get minBrzina() {
        return this._minBrzina;
    }
    set trenutnaBrzina(currentB) {
        this._trenutnaBrzina = currentB;
    }
    get trenutnaBrzina() {
        return this._trenutnaBrzina;
    }
    ubrzaj(x) {
        this.trenutnaBrzina += x;
        if (this.trenutnaBrzina > this.maxBrzina) {
            this.trenutnaBrzina = this.maxBrzina;
        }
    }
    uspori(y) {
        this.trenutnaBrzina -= y;
        if (this.trenutnaBrzina < this.minBrzina) {
            this.trenutnaBrzina = this.minBrzina;
        }
    }
}