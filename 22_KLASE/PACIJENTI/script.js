import { Pacijent } from "./pacijenti.js";

console.log("Pacijenti Zadatak:");
console.log("");

let p1 = new Pacijent("Jovan", 1.85, 60)
console.log(p1);
let p2 = new Pacijent("Dragan", 1.6, 82) // test za visinu geter
console.log(p2);
let p3 = new Pacijent("Sladjana", 1.5, 30) // test za tezinu geter
console.log(p3);

// Stampaj sve informacije
console.log("");
console.log("Pacijent 1:", p1.stampaj());
console.log("Pacijent 2: ", p2.stampaj());
console.log("Pacijent 3: ", p3.stampaj());

// Bmi ispis
console.log("");
console.log("Pacijent 1 Bmi:", p1.bmi());
console.log("Pacijent 2 Bmi:", p2.bmi());
console.log("Pacijent 3 Bmi:", p3.bmi());

// Kritican
console.log("");
console.log("Pacijent 1 Kritican Bmi:", p1.kritican());
console.log("Pacijent 1 Kritican Bmi:", p2.kritican());
console.log("Pacijent 1 Kritican Bmi:", p3.kritican());

// Nastavak pacijenata

let pacijenti = [p1, p2, p3]

// Ispis podataka o pac sa najmanjom tezinom
let btnMinTez = document.querySelector("#minTez");
let minTezRez = document.querySelector("#minTezRez");

btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0];
    pacijenti.forEach(p => {
        if (min.tezina > p.tezina) {
            min = p
        }
    })
    // console.log(min)
    // A posto je min sada objekat mozemo i da ga pozovemo smao
    // min.stampaj();
    minTezRez.innerHTML = min.stampajListu();
    // A sada sa naprvljenm novom metodom pozivamo u span.
})

let btnMaxBMI = document.querySelector("#maxBMI");
let maxBMIrez = document.querySelector("#maxBMIrez");

btnMaxBMI.addEventListener("click", () => {
    let maxBMI = pacijenti[0]  //pretpostavka
    for (let i = 1; i < pacijenti.length; i++) {
        if (maxBMI.bmi() < pacijenti[i].bmi()) {
            maxBMI = pacijenti[i];
        }
    }
    maxBMIrez.innerHTML = maxBMI.stampajListu();
})