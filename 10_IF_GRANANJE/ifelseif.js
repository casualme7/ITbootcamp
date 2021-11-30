// let ocena = 4;

// if (ocena == 5) {
//     console.log("ODLICAN!")
// } else if (ocena == 4) {
//     console.log("Vrlo Dobar!")
// } else if (ocena == 3) {
//     console.log("Dobar.")
// } else if (ocena == 2) {
//     console.log("Dovoljan...")
// } else if (ocena == 1) {
//     console.log("NEDOVOLJAN!")
// }


// ZADATAK 7

let ocena = 82;

if (ocena > 50 && ocena <= 60) {
    console.log("Ocena 6")
} else if (ocena > 60 && ocena <= 70) {
    console.log("Ocena 7")
} else if (ocena > 70 && ocena <= 80) {
    console.log("Ocena 8")
} else if (ocena > 80 && ocena <= 90) {
    console.log("Ocena 9")
} else if (ocena > 90 && ocena <= 100) {
    console.log("Ocena 10")
} else {
    console.log("Ocena je manja od 50")
}

// ZADATAK 8

let date = new Date();
let dan = date.getDay();

if (dan == 1) {
    console.log("Ponedeljak")
} else if (dan == 2) {
    console.log("Utorak")
} else if (dan == 3) {
    console.log("Sreda")
} else if (dan == 4) {
    console.log("Cetvrotak")
} else if (dan == 5) {
    console.log("Petak")
} else if (dan == 6) {
    console.log("Sutota")
} else {
    console.log("Nedelja")
}
// ZADATAK 9
let hour = date.getHours()

if (hour < 12 && hour >= 0) {
    console.log("Dobro Jutro")
} else if (hour < 18 && hour > 12) {
    console.log("Dobar dan")
} else {
    console.log("Dobro vece")
}
// ZADATAK 10
let dan1 = 12;
let mesec1 = 4;
let godina1 = 1998;

let datum1 = `${dan1}.${mesec1}.${godina1}`

let dan2 = 24;
let mesec2 = 7;
let godina2 = 2009;

let datum2 = `${dan2}.${mesec2}.${godina2}`

if (godina1 < godina2) {
    console.log(`${datum1} je raniji`)
} else if (godina1 > godina2) {
    console.log(`${datum2} je raniji`)
} else if (mesec1 < mesec2) {
    console.log(`${datum1} je raniji`)
} else if (mesec1 > mesec2) {
    console.log(`${datum2} je raniji`)
} else if (dan1 < dan2) {
    console.log(`${datum1} je raniji`)
} else if (dan1 > dan2) {
    console.log(`${datum2} je raniji`)
} else {
    console.log("Datumi su totalno isti");
}
// ZADATAK 11 
let pcWorking = date.getHours();
if (pcWorking >= 9 && pcWorking <= 17) {
    console.log("Firma radi")
} else {
    console.log("Firma ne radi")
}
// ZADATAK 13
brojX = 13;

if (brojX % 2 === 0) {
    console.log(`Broj: ${brojX} je paran`)
} else {
    console.log(`Broj: ${brojX} je neparan`)
}
// ZADATAK 14 
brojZ = 13;

if (brojZ % 3 === 0) {
    console.log(`Broj: ${brojZ} je deljiv sa 3`)
} else {
    console.log(`Broj: ${brojZ} nije deljiv sa 3`)
}
// ZADATAK 15
let numberXX = 122;
let numberYY = 156;

if (numberXX > numberYY) {
    console.log(`${numberXX - numberYY}`)
} else if (numberYY > numberXX) {
    console.log(`${numberYY - numberXX}`)
} else {
    console.log("ERROR")
}
// ZADATAK 16
let broJJJ = 0;
if (broJJJ < 0) {
    console.log(`Broj ${--broJJJ}`)
} else if (broJJJ > 0) {
    console.log(`Broj ${++broJJJ}`)
} else {
    console.log(`S obzirom na to da nemamo vise opcija, broj je verovatno jednak 0, Broj ${--broJJJ}`)
}
// ZADATAK 17