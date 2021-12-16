function suma(a, b) {
    return a + b; // definicija funkcije
}
console.log(suma(12, 24)) // poziv funkcije

// Aninimne funkcije

let suma2 = function (a, b) {
    return a + b;
}
console.log(suma2(6, 6));

// ARROW FUNKCING

let suma3 = (a, b) => {
    return a * b;
}
console.log(suma3(23, 25));

// Arrow f-ja za ispis poruke:

let poruka = () => {
    console.log("CAO CAO");
}
poruka();

let pozdrav = (ime, prezime) => {
    console.log(`Zdravo ${ime} ${prezime}`)
}
pozdrav("Vladan", "Stojic")
pozdrav("Majstor", "Bob")

// Arrow f-ja kojoj se prosledjuje ime i godine koisnika
// A ona ispisuje im i da li je koristnik punoletan ili ne:

let ispis = (ime, godine) => {
    if (godine < 18) {
        let poruka = (`Korsnik ${ime} je maloletna osoba`)
        document.body.innerHTML += `<p style="color: blue">${poruka}</p>`
    } else {
        let poruka = (`Korsnik ${ime} je punoletna osoba`)
        document.body.innerHTML += `<p style="color: green">${poruka}</p>`
    }
}
ispis("Jovana", 23);
ispis("Mika", 12);

////////////////////////////////////////

let zbir = (a, b, radnja) => {
    if (radnja == "+") {
        console.log(a + b);
    } else if (radnja == "-") {
        console.log(a - b);
    } else if (radnja == "*") {
        console.log(a * b);
    } else if (radnja == "/") {
        console.log(a / b);
    } else {
        console.log("Pogresan unos")
    }
}
zbir(2, 5, "*");

///////////////////////////////////

let neparan = (n) => {
    if (n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
let nep = neparan(11);
console.log(nep);

/// PARAN ILI NE /////////

let paran = (n) => (n % 2 == 0) ? true : false;

console.log(`Skracena verzija`, paran(12))

//////////////////////////////////

let maks2 = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(maks2(125, 25))

// --- skracena verzija--
// ? : 

let max2 = (a, b) => (a > b) ? a : b;
console.log(max2(6, 18))

//---------------
let maks4 = (a, b, c, d) => {
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else {
        return d;
    }
}
console.log(maks4(24, 2, 25, 1));

//---- skracena --

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

console.log(max4(213, 2254, 11225, 641))

/////////////////////////////////

//--- skraceno 2 nacin

let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max4DN(1, 2, 3, 4));

//////////////////////////////

let image = (url) => {
    return `<img src="${url}" alt="">`;
}
document.body.innerHTML += image("1.jpg")

// -skracen nacin-

let image2 = (url) => `<img src="${url}" alt="">`;
document.body.innerHTML += image2("https://m.media-amazon.com/images/I/71i3zSC2d3L._AC_SX679_.jpg")

// -bez zagrada-

let image3 = url => `<img src="${url}" alt="">`;
document.body.innerHTML += image3("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/panorama-milky-way-galaxy-with-stars-and-space-dust-royalty-free-image-1623176828.jpg?crop=1xw:0.88893xh;center,top&resize=1200:*")

///////////////////////////////

let collor = (clr) => {
    document.body.innerHTML += `<p style="color: ${clr};">${clr} paragraf</p>`
}

collor("red");
collor("magenta");
collor("lime");

//////////////////////////

let sedmiDan = n => (n % 7 == 0) ? "Ned" : (n % 7 == 1) ? "Pon" : (n % 7 == 2) ? "Uto" : (n % 7 == 3) ? "Sre" : (n % 7 == 4) ? "Cet" : (n % 7 == 5) ? "Pet" : "Sub";
console.log(sedmiDan(4));

/////////////////////////

// let deljivSaTri = (broj1, broj2) => {
//     let brojx = broj1;
//     let koliko = 0;
//     while (brojx <= broj2) {
//         if (brojx % 3 == 0) {
//             koliko++
//         }
//         brojx++
//     }
//     console.log(`Od`, broj1, `do`, broj2, `ima`, koliko, `brojeva deljivih sa`, 3);
// }
// deljivSaTri(245, 793);

// ///////////////////////

// let sumiraj = (n, m) => {
//     let sumNM = 0;
//     let nx = n
//     while (nx <= m) {
//         sumNM += nx
//         nx++
//     }
//     console.log("Suma od", n, "do", m, "iznosi", sumNM)
// }
// sumiraj(2, 10)

// ////////////////////////////

// let sumiraj2 = (n, m) => {
//     let sumNM = 0;
//     for (n; i <= m; n++) {
//         return sumNM += i;
//     }
// }
// console.log(sumiraj(2, 10))