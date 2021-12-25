let dan = {
    datum: "2021/05/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [4, 6, 9, 12, 14, 13, 12, 14, 8, 4],
    // vrednostiTemperature: [34, 36, 39, 24],
    // vrednostiTemperature: [-4, -6, -9, -9],
    izmerenihTemperatura: function () {
        return this.vrednostiTemperature.length;
    },
    prosecnaTemperatura: function () {
        let sum = 0;
        this.vrednostiTemperature.forEach(el => {
            sum += el;
        })
        return sum / this.vrednostiTemperature.length;
    },
    nadprosecnaTemperatura: function () {
        let brojac = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el > this.prosecnaTemperatura()) {
                brojac++;
            }
        })
        return brojac
    },
    kolikoPutaMaximalnaTemperatura: function () {
        let max = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(el => {
            if (el > max) {
                max = el;
            }
        })
        let brojac = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el === max) {
                brojac++;
            }
        })
        return brojac;
    },
    temperaturaIzmedju(x, y) {
        let brojac = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el > x && el < y) {
                brojac++
            }
        })
        return brojac;
    },
    vecinaDanaIznadProseka() {
        return (this.nadprosecnaTemperatura() > this.vrednostiTemperature.length / 2)
    },
    ledeniDan() {
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > 0) {
                return false
            }
        }
        return true;
    },
    tropskiDan() {
        for (let i = 0; i < this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] < 24) {
                return false;
            }
        }
        return true;
    },
    nepovoljanDan() {
        let vrm = this.vrednostiTemperature;
        for (let i = 0; i < vrm.length; i++) {
            if (vrm[i] - vrm[i + 1] > 8 || vrm[i] - vrm[i + 1] < -8) {
                return true;
            }
        }
        return false;
    },
    neoubicajenDan() {
        let vrm = this.vrednostiTemperature;
        for (let i = 0; i < vrm.length; i++) {
            if (vrm[i] < -5 && this.kisa == true) {
                return true;
            } else if (vrm[i] > 25 && this.oblacno == true) {
                return true;
            } else if (this.kisa == true && this.oblacno == true && this.sunce == true) {
                return true;
            }
        }
        return false;
    }
}

console.log("Izmerenih temp u toku dana:", dan.izmerenihTemperatura());
console.log("Prosecna temperatura je:", dan.prosecnaTemperatura());
console.log("Koliko puta je temperatura bila iznad proseka:", dan.nadprosecnaTemperatura());
console.log("Koliko puta je temperatura bila maximalna dnevna temperatura: ", dan.kolikoPutaMaximalnaTemperatura());
console.log("Koliko puta je temperatura bila izmedju navedenih temperatura: ", dan.temperaturaIzmedju(8, 13));
console.log("Da li je temp u vecini dana bila iznad proseka? ", dan.vecinaDanaIznadProseka());
console.log("Ladeni Dan? ", dan.ledeniDan());
console.log("Tropski Dan? ", dan.tropskiDan());
console.log("Nepovoljan Dan? ", dan.nepovoljanDan());
console.log("Neoubicajen Dan? ", dan.neoubicajenDan());