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

/////////////////////////////////////////////////////


// ZADATAK 16:
console.log("")
console.log("---- ZADATAK", 16, "----")
console.log("In HTML document")

let arr = ["Jogurt", "Piletina", "Kikiriki", "Majonez", "Mleko", "Vocni Jogurt", "Suvi vrat", "Ajvar", "avokado", "Plazma Kockice", "Jaja"];

let listaZaKupovinu = niz => {
    let ul = `<ul> ZADATAK 16:`
    for (let i = 0; i < niz.length; i++) {
        ul += `<ul><li>${niz[i]}</li></ul>` //namerno sam dodao 2 ul-a da izgleda lepse
    }
    ul += `</ul>`
    // document.body.innerHTML += ul;
    // drugi nacin je da returnujemo
    return ul;
}
// listaZaKupovinu(arr);
document.body.innerHTML = listaZaKupovinu(arr)

// ZADATAK 17:
console.log("")
console.log("---- ZADATAK", 17, "----")
console.log("In HTML document")

let arr2 = ["Miljan Pantovic", "Nikola Glavonjic", "Bogdan Jovanovic", "Bojan Ristic", "Vladan Stojic", "Djole Stosic", "Kristina Jovanovic", "Kristina Mandic", "Sofija Nikolic", "Vukasin Babic"];

let listaTima = niz => {
    let tl = `<table border="1">`
    for (let i = 0; i < niz.length; i++) {
        tl += `<tr><td>${niz[i]}</td></tr>`
    }
    tl += `</table>`
    // document.body.innerHTML += tl;
    // Drugi nacin da returnujemo
    return tl;
}
// listaTima(arr2);
document.body.innerHTML += listaTima(arr2);

// ZADATAK 18:
console.log("")
console.log("---- ZADATAK", 18, "----")
console.log("In HTML document")

let arr3 = ["https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg", "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg", "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"]

let listaSlika = niz => {
    let sec = `<section>`
    for (let i = 0; i < niz.length; i++) {
        sec += `<p><img src="${niz[i]}" width="150px"></p>`
    }
    sec += `</section>`
    document.body.innerHTML += sec;
    // Mozei bez celogsectiona, nego sam cisto bezveze
    // dodao section da bude zanimljivije i da se vezba.
}
listaSlika(arr3);

// ZADATAK 19 moje zezanje:
console.log("")
console.log("---- ZADATAK", 19, "/", 1, "----")
console.log("In HTML document")

let arr4 = ["140", "200", "65", "367"];

let elemWidth = niz => {
    for (let i = 0; i < niz.length; i++) {
        document.body.innerHTML += `<p style="border: 4px solid black; padding:10px; width: ${niz[i]}px;">Paragraf od ${niz[i]} pixela</p>`
    }
}
elemWidth(arr4);

// ZADATAK 19: 
console.log("")
console.log("---- ZADATAK", 19, "----")

let arrayAllLenght = niz => {
    for (let i = 0; i < niz.length; i++) {
        console.log(`"${niz[i]}" - length:`, niz[i].length)
    }
}
arrayAllLenght(arr)

// ZADATAK 20:
console.log("")
console.log("---- ZADATAK", 20, "----")

let arrayLenght = niz => {
    let max = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > max.length) {
            max = niz[i];
        }
    }
    return max;
}
console.log("Najduzi Element u array-u je:", arrayLenght(arr))

// ZADATAK 21:
console.log("")
console.log("---- ZADATAK", 21, "----")

let prosecanLenght = niz => {
    let lengthX = 0;
    let howManyAboveAVG = 0;
    for (let i = 0; i < niz.length; i++) {
        lengthX += niz[i].length;
        avgLength = lengthX / niz.length;
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > avgLength) {
            howManyAboveAVG++
            console.log(niz[i], "- length:", niz[i].length)
        }
    }
    console.log("Full elements in array length: ", lengthX)
    console.log(`AGV length =`, lengthX, '/', niz.length, '=', avgLength.toFixed(2))
    console.log(`Elements length Above AVG length =`, howManyAboveAVG)
}
prosecanLenght(arr);

// ZADATAK 22:
console.log("")
console.log("---- ZADATAK", 22, "----")

let nizSaA = niz => {
    let wtf = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].indexOf("a") != -1 || niz[i].indexOf("A") != -1) {
            wtf.push(niz[i]);
        }
    }
    return wtf;
}
console.log("Elementi array-a koji sadrze slovo A:", nizSaA(arr));

// ZADATAK 23: 
console.log("")
console.log("---- ZADATAK", 23, "----")

let pocinjeSaA = niz => {
    let wtf2 = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].indexOf("A") == 0 || niz[i].indexOf("a") == 0) {
            wtf2.push(niz[i]);
        }
    }
    return wtf2;
}
console.log(`Elementi Array-a koji pocinju sa "A" ili "a":`, pocinjeSaA(arr));

// ZADATAK 24: 
console.log("")
console.log("---- ZADATAK", 24, "----")

let xx1 = ["a", "b", "c", "d", "e"]
let xx2 = ["1", "2", "3", "4", "5"]

let arrayMerge = (array1, array2) => {
    let array3 = [];
    if (array1.length > array2.length) {
        for (let i = 0; i < array1.length; i++) {
            array3.push(array1[i]);
            array3.push(array2[i]);
        }
    } else if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            array3.push(array1[i]);
            array3.push(array2[i]);
        }
    } else {
        for (let i = 0; i < array2.length; i++) {
            array3.push(array1[i]);
            array3.push(array2[i]);
        }
    }
    return array3;
}
console.log(`Merging elements from both arrays into 1:`, arrayMerge(xx1, xx2));
// Popraviti kada je jedan array veci od drugog.
// 100% cu skontanti ako se koncentrisem.

// ZADATAK 25: 
console.log("")
console.log("---- ZADATAK", 25, "----")

let xx3 = ["6", "5", "2", "11", "19"]

let arrayMultiplyElements = (array1, array2) => {
    let array3 = [];
    let something = 1;
    if (array1.length > array2.length) {
        for (let i = 0; i <= array1.length; i++) {
            something = array1[i] * array2[i];
            console.log(something);
            array3.push(something);
        }
    } else if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            something = array1[i] * array2[i];
            array3.push(something);
        }
    } else {
        for (let i = 0; i <= array2.length; i++) {
            something = array1[i] * array2[i];
            array3.push(something);
        }
    }
    return array3;
}
console.log('Multiplying elements from both arrays into 1:', arrayMultiplyElements(xx2, xx3));

// ZADATAK 26: 
console.log("")
console.log("---- ZADATAK", 26, "----")

let newArrayFormula = (array1,resenje) => {
    let array4 = [];
    for (let i = 0; i < array1.length; i++) {
        resenje[i] = (array1[i] + (array1[i] * (2 * array1.length - 1 - i)) / 2);
        array4.push(resenje)
    }
    return array4;
}
console.log(`WTF:`, newArrayFormula(xx2,1));