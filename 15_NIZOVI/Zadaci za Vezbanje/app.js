// ZADATAK 1:
console.log("---- ZADATAK", 1, "----");

let sum = (n, m) => {
    return n ** 4 + m ** 4;
}
console.log(`Suma kubova brojeva je:`, sum(5, 6));

// ZADATAK 2:
console.log("");
console.log("---- ZADATAK", 2, "----");

let godine = godRodjenja => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let years = currentYear - godRodjenja;
    return years;
}
console.log(`Person has:`,godine(1995),`years`);

// ZADATAK 3:
console.log("");
console.log("---- ZADATAK", 3, "----");

let deljiv = (prviBr, drugiBr, delilac) => {
    let brojX = prviBr;
    let resenje = 0;
    for (let i = brojX; i < drugiBr; i++) {
        if (i % delilac == 0) {
            resenje++;
        }
    }
    return `Broj brojeva od ${prviBr} do ${drugiBr} deljivi sa ${delilac} = ${resenje}`;
}
console.log(deljiv(1, 200, 5));


// ZADATAK 4:
console.log("");
console.log("---- ZADATAK", 4, "----");

let pilot = (satPoletanja, minutPoletanja, satSletanja, minutSletanja) => {
    let resenje;
    if (minutSletanja > minutPoletanja) {
        resenje = `Put je trajao ${satSletanja - satPoletanja}h i ${minutSletanja - minutPoletanja} min`;
    } else {
        resenje = `Put je trajao ${satSletanja - satPoletanja - 1} h i ${60 - (minutPoletanja - minutSletanja)} min`;
    }
    return resenje;
}
console.log(pilot(11, 11, 22, 30));


// ZADATAK 5:
console.log("");
console.log("---- ZADATAK", 5, "----");

let jaban = (isporucenihJabuka, isporucenihBanana) => {
    let jabuka = isporucenihJabuka * 0.8;
    let banana = isporucenihBanana;
    if (jabuka / 2 < banana / 3) {
        return Math.floor(jabuka / 2);
    } else {
        return Math.floor(banana / 3);
    }
}
console.log("Could make",jaban(41, 65),"meals");

// ZADATAK 6:
console.log("");
console.log("---- ZADATAK", 6, "----");

let praksa = (praksaTrajanje,prvaPlata,povisica) => {
    let x = prvaPlata;
    let y = povisica
    console.log(`Duration`,praksaTrajanje, `months , First salary`, x, `, Monthly pay increase`, y);
    console.log(`Month 1`,prvaPlata);
    let ukupno = prvaPlata;
    for (let i = 1 ; i < praksaTrajanje; i++) {
        prvaPlata += povisica;
        console.log(`Month ${i+1}`,prvaPlata);
        ukupno += prvaPlata;
    }
    console.log(`Total earned for`,praksaTrajanje, `months:`, ukupno)
}
praksa(8,900,250)

// ZADATAK 7:
console.log("");
console.log("---- ZADATAK", 7, "----");

let fabrika = (prvaNoga,drugaNoga,trecaNoga) => {
    let prvaDruga = prvaNoga - drugaNoga;
    let drugaTreca = drugaNoga - trecaNoga;
    let cetvrta = trecaNoga - prvaDruga;
    if (prvaDruga != drugaTreca) {
        return "Netacan Unos!"
    } else {
        return cetvrta;
    }
}
console.log("Cetvrta noga iznosi:",fabrika(13,10,7));

// ZADATAK 8:
console.log("");
console.log("---- ZADATAK", 8, "----");