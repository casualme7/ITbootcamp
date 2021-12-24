let dan = {
    datum: "2021/05/23",
    kisa: false,
    sunce: true,
    oblacno: false,
    vrednostiTemperature: [4, 6, 9, 12, 14, 13, 12, 14, 8, 4],
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
}


console.log("Izmerenih temp u toku dana:", dan.izmerenihTemperatura());
console.log("Prosecna temperatura je:", dan.prosecnaTemperatura());
console.log("Koliko puta je temperatura bila iznad proseka:", dan.nadprosecnaTemperatura());
console.log("Koliko puta je temperatura bila maximalna dnevna temperatura: ", dan.kolikoPutaMaximalnaTemperatura());
console.log("Koliko puta je temperatura bila izmedju navedenih temperatura: ", dan.temperaturaIzmedju(8, 13));
console.log("Da li je temp u vecini dana bila iznad proseka? ", dan.vecinaDanaIznadProseka());