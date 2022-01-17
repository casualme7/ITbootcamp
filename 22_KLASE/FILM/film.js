export class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
        this.ocene = o;
    }
    // Seter za Naslov
    set naslov(n) {
        let n1 = n.trim();
        if (n1.length > 0) {
            this._naslov = n1;
        } else {
            this._naslov = "Neki Film"
        }
    }
    // Geter za naslov
    get naslov() {
        return this._naslov;
    }
    // Seter za rezisera
    set reziser(r) {
        let r1 = r.trim();
        if (r1.length > 0) {
            this._reziser = r1;
        } else {
            this._reziser = "Neki Reziser"
        }
    }
    // Geter za rezisera
    get reziser() {
        return this._reziser;
    }
    // Seter za godinu
    set godinaIzdanja(gi) {
        if (gi < 1800) {
            this._godinaIzdanja = 1800;
        } else {
            this._godinaIzdanja = gi;
        }
    }
    // Geter za godinu
    get godinaIzdanja() {
        return this._godinaIzdanja
    }
    // Seter za ocene
    set ocene(o) {
        this._ocene = o;
    }
    // Geter za ocene
    get ocene() {
        return this._ocene;
    }
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena)
    }
    stampaj() {
        // console.log(`Naslov filma: ${this.naslov}, reziser: ${this.reziser}`)
        console.log(this);
    }
    prosek() {
        let sum = 0;
        this.ocene.forEach(el => {
            sum += el;
        })
        return sum / this.ocene.length
    }
}

// export { Film }