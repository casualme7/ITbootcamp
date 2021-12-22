let a = [1, 9, -6, 5, 1];
let b = [25, 125, 16, 12];

// function ispis(elem) {
//     console.log(`Element niza je:`, elem);
// }
// a.forEach(ispis);

a.forEach(elem => {
    console.log(`Element:`, elem)
});

// Odrediti zbir niza sa forEach

let zbir = (niz) => {
    let s = 0;
    niz.forEach(el => {
        s += el;
    });
    return s;
}

let zbirParnih = (niz) => {
    let s = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            s += el;
        }
    });
    return s;
}

let zbirParnihIndex = (niz) => {
    let s = 0;
    niz.forEach((el, index) => {
        if (index % 2 == 0) {
            s += el;
        }
    });
    return s;
}

console.log(zbir(a));
console.log(zbir(b));
console.log(zbirParnih(a));
console.log(zbirParnihIndex(a));

/////////////////////////////////
// ZADATAK 3:
let proizvodElemenata = (niz) => {
    let p = 1;
    niz.forEach(el => {
        p *= el;
    });
    return p;
}
console.log(`Proizvod elemenata:`, proizvodElemenata(a));

// ZADATAK 4:

let srednjaVrednostElemenata = (niz) => {
    let total = 0;
    let srednjaVrednost = 0;
    niz.forEach(el => {
        srednjaVrednost = (total += el) / niz.length;
    })
    return srednjaVrednost;
}
console.log(`Srednja Vrednost elementa je:`, srednjaVrednostElemenata(b));

// ZADATAK 5:

let maxVrednostElementa = (niz) => {
    let max = niz[0];
    niz.forEach(el => {
        if (el > max) {
            max = el;
        }
    });
    return max;
}
console.log(`Max element je:`, maxVrednostElementa(a));

// ZADATAK 6:

let minVrednostElementa = (niz) => {
    let min = niz[0];
    niz.forEach(el => {
        if (el < min) {
            min = el;
        }
    });
    return min;
}
console.log(`Min element je:`, minVrednostElementa(a));