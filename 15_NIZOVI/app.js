let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [25, -1, 12, 12, -561, 63, 84];
console.log(numbers);

let random = [6, "Stefan", -8.9, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars);

// cars[0] = undefined; // Nacin adse ukloni elemnent iz niza

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

// ZADATAK 2:
let zadatakBrojevi = [2, 2, 52, 4, 6];
let zadatakBrojevi2 = [22, 52, 652, 24, 56, 1512, 512];
let zadatakBrojevi3 = [5, 5, 2];


//----------------- SA FUNKCIJOM -----------
let sumaElementata = niz => {
    let total = 0;
    for (let i = 0; i < niz.length; i++) {
        total += niz[i];
    }
    return total;
}

console.log("Suma elementara sa funkcijom:", sumaElementata(zadatakBrojevi))
// ----------------- BEZ FUNKCIJE -----------

let total = 0;
for (let i = 0; i < zadatakBrojevi.length; i++) {
    total += zadatakBrojevi[i];
}
console.log("Suma je (bez funkcije):", total);

//--------------------------------------------

// ZADATAK 3:

//----------------- SA FUNKCIJOM -----------
let proizvodElemenata = niz => {
    let total = 1;
    for (let i = 0; i < niz.length; i++) {
        total *= niz[i];
    }
    return total;
}

console.log("Proizvod elemenata sa funkcijom:", proizvodElemenata(zadatakBrojevi))
// ----------------- BEZ FUNKCIJE -----------

let total2 = 1;

for (let i = 0; i < zadatakBrojevi.length; i++) {
    total2 *= zadatakBrojevi[i];
}
console.log(`Proizvod bez funkcije:`, total2);

//----------------------------------------------

// ZADATAK 4:

// ----------- SA FUNKCIJOM ----------------

let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i]
        broj++;
    }
    return (broj != 0) ? suma / broj : 0;
}
console.log("Srednja vrednost sa funkcijom:", arSr(zadatakBrojevi));

// ------------ SA FUNKC , drugi nacin --------

let arSr2 = niz => {
    let suma = sumaElementata(niz)
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}
console.log("Srednja vrednost sa f-om (drugi nacin)", arSr2(zadatakBrojevi));

// ------------ SA FUNKC , treci nacin --------

let arSr3 = niz => (niz.length != 0) ? sumaElementata(niz) / niz.length : 0;

console.log("Srednja vrednost sa f-om (treci nacin)", arSr3(zadatakBrojevi));

// ----------- BEZ FUNKCIJE ---------------
console.log(`Srednja vrednost bez funkcije:`, total / zadatakBrojevi.length);

// ---------------------------------------//

// ZADATAK 5:

// ----------------- BEZ FUNKCIJE ------------------
let max = Math.max(...zadatakBrojevi);
console.log(`Maximalan br u nizu:`, max);

// --------- SA FUNKCIJOM -----------------
let maxNumber = xx => Math.max(...xx);
console.log("Maximalan br sa funkcijom:", maxNumber(zadatakBrojevi));

// ---------- PRIMER SA CASA -----------------

let maxVrednost = niz => {
    let max9 = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max9) {
            max9 = niz[i];
        }
    }
    return max9;
}
console.log("Max br, primer sa casa", maxVrednost(zadatakBrojevi))

// ---------------------------------------

// ZADATAK 6:

// ----------------- BEZ FUNKCIJE ------------------
let min = Math.min(...zadatakBrojevi);
console.log(`Minimalan br u nizu:`, min);

// --------- SA FUNKCIJOM -----------------
let minNumber = xx => Math.min(...xx);
console.log("Maximalan br sa funkcijom:", minNumber(zadatakBrojevi));

// ---------- PRIMER SA CASA -----------------

let minVrednost = niz => {
    let min9 = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min9) {
            min9 = niz[i];
        }
    }
    return min9;
}
console.log("Min br, primer sa casa", minVrednost(zadatakBrojevi))

// ---------------------------------------

// ZADATAK 7:

let maxIndex = niz => {
    let max9 = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max9) {
            max9 = niz[i];
            index = i;
        }
    }
    return index;
}
console.log("Max index", maxIndex(zadatakBrojevi))

// ZADATAK 8:

let minIndex = niz => {
    let min9 = niz[0];
    let index1 = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min9) {
            min9 = niz[i];
            index1 = i;
        }
    }
    return index1;
}
console.log("Min index", minIndex(zadatakBrojevi))

// ZADATAK 9:
