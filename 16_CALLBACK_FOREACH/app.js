// function ispisKonzola(niz) {
//     let rezultat = "";
//     for (let i = 0; i < niz.length; i++) {
//         rezultat += niz[i] + " ";
//     }
//     console.log(rezultat);
// }

// function ispisHTML(niz) {
//     let rezultat = "";
//     for (let i = 0; i < niz.length; i++) {
//         rezultat += niz[i] + " ";
//     }
//     document.body.innerHTML += `<div>${rezultat}</div>`
// }

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`
}

function ispisNiza(niz, callback) {
    let rezultat = "";
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i] + " ";
    }
    callback(rezultat);
}

let brojevi = [5, 25, 6, -16, 12, -75, 11, 56, -111, 86, -351, 110, 159, 189];

// ispisKonzola(brojevi);
// ispisHTML(brojevi);

ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);


// ISTI ZADATAK SAMO SE POZIVAJU ANONIMNE FUNKCIJE:

ispisNiza(brojevi, function (poruka) {
    console.log(poruka)
});

ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`
});


// ISTI ZADATAK SAMO SE POZIVAJU ARROW FUNKCIJE:

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`
});

/////////////////////////////////
console.log("--------------------------------")

function max(arr) {
    let koliko = 0;
    let max = arr[0];
    console.log(`Max is:`, max)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            koliko++
            console.log(`Higher than max value:`, arr[i])
        }
    }
    console.log(`Total numbers higher than max:`, koliko);
}

function min(arr) {
    let koliko = 0;
    let min = arr[0];
    console.log(`Min is:`, min)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            koliko++
            console.log(`Lover than min value:`, arr[i])
        }
    }
    console.log(`Total numbers lower than min:`, koliko);
}

function minmax(niz, cb) {
    cb(niz);
}

minmax(brojevi, max);
minmax(brojevi, min);
console.log("--------------------------------")

/////// STEFAN RESENJE? /////////////
// ZADATAK JE USTVARI KOLIKO PUTA SE POJAVILA TA MIN/MAX VALUE...

function maxEl(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

function brojSvosjtvaNiz(niz, svojstvo) {
    let s = svojstvo(niz);
    let broj2 = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj2++
        }
    }
    return broj2;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvosjtvaNiz(temperature, minEl));

////////////////////////////////////////

