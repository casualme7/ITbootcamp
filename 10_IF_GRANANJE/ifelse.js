// if (true) {
//     console.log("Uslov je ispunjen")
// } else {
//     console.log("Uslov nije ispunjen")
// }

// if (false) {
//     console.log("Uslov je ispunjen")
// } else {
//     console.log("Uslov nije ispunjen")
// }

// // -----------------------------

// a = 5;
// b = 7;
// if (a < b) {
//     console.log("Broj A je strogo manji od broja B ")
// } else {
//     console.log("Broj A je veci ili jednak od broja B ")
// }

// --------------------------------------

let pol = "m";

if (pol == "m") {
    document.body.innerHTML += `<img src="Slikice/m.png">`
} else {
    document.body.innerHTML += `<img src="Slikice/z.png">`
}

// --------------------------------------

let b1 = 5;
let b2 = 9;
let b3 = 7;

let maks = b1; //pretpostavka
// Ako je pretpostavka losa onda uradim update
if (maks < b2) {
    maks = b2;
}

if (maks < b3) {
    maks = b3;
}

document.body.innerHTML += `<p>Max br je: ${maks}</p>`

// -------------------------------------

let date = new Date();
let sati = date.getHours();
// console.log(date)
// console.log(sati)

if (sati > 12) {
    console.log("Trenutno je popodne")
} else {
    console.log("Trenutno je jutro")
}

let year = date.getFullYear()
let myAge = 1995;

if (year - myAge >= 18) {
    console.log("Osoba je punoletna")
} else {
    console.log("Osoba je maloletna")
}

// ------------------------------------