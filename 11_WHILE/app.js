// let i = 1;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;

// let i = 1;
// while (i <= 5) {
//     console.log(i)
//     i++
// }
// console.log(`Vrednost promenljive i je: ${i}`)

// let r = Math.random();
// while (r < 0.99) {
//     console.log(r)
//     r = Math.random();
// }
// console.log(r)

let arr = "";
let num = 1;
while (num <= 20) {
    arr += num + " ";
    console.log(num)
    num++;
}
console.log(arr);

// ------------------------------

let num2 = 20;
while (num2 >= 1) {
    console.log(num2)
    num2--;
}

// ----------------------------

let num3 = 1;
while (num3 <= 20) {
    if (num3 % 2 == 0) {
        console.log(num3)
    }
    num3++;
}

// ----------------------------

let repeat = 1;
let total = 0;

while (repeat <= 100) {
    repeat++;
    total += repeat;
}
console.log(total)

// SABIRANJE SVIH BROJEVA od 1 do 100

// -------------------------

let p = 0;
while (p < 20) {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let color2 = `rgb(${r},${g},${b})`;
    document.body.innerHTML += `<p style="color: ${color2};"><b>TEXT</b></p>`
    p++
}

// RGB P COLLOR
// ----------------------------

let n = 50;
let repeat2 = 1;
let total2 = 0;

while (repeat2 <= n) {
    repeat2++;
    total2 += repeat2;
}
console.log(total2)

// ---------------------------------

n = 13;
let m = 16;

i = n;
let proizvod = 1;
while (i <= m) {
    proizvod = proizvod * i;
    i++
}
console.log(`Proizvod brojeva od ${n} do ${m} jednaj je ${proizvod}`);

// ------------ZADATAK 10------------------------

let n1 = 13;
let m1 = 14;

let i1 = n1;
let sumaParnih = 0;
let sumaNeparnih = 0;
while (i1 <= m1) {
    if (i1 % 2 === 0) {
        sumaParnih += i1 ** 2
    } else if (i1 % 2 === 1) {
        sumaNeparnih += i1 ** 4
    } else {
        console.log("Error")
    }
    i1++
}
console.log(`Rezultat: ${sumaNeparnih + sumaParnih}`)

// -------------ZADATAK 11----------























// 12 zadatak

// let nekiBroj = 2;

// if (nekiBroj % 1 === 0 && nekiBroj && nekiBroj === 0) {
//     console.log(`Broj ${nekiBroj} je prost broj!`)
// } else {
//     console.log(`Broj ${nekiBroj} nije prost :(`)
// }