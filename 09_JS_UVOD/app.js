// console.log("Pozz iz JS datoteke")

// let a = 2, b = 6;
// console.log(a * b);
// console.log("Pera" + " Stankovic")
// console.log("Pera" * " Stankovic")
// // Ne moze puta

// b = b / a;
// console.log(a, b); // a = 3 , b = 2
// a = b * a + a;
// console.log(a, b); // a = 9 , b = 2
// b = (a - 2 * b) / b;
// console.log(a, b) // a = 9 , b = 2.5

// a++
// console.log(a);

// ++a
// console.log(a);

// let c = 5;
// console.log(c++);
// // ovom slucaju ce nam console log prci ispisati c pa tek onda dodati 1 broj na c
// //broj ce biti veci u slededem console logu
// console.log(c);

// let k = 5;
// console.log(++k);
// // Sada ce nam dodati 1 i osmah u tom console logu ispisati broj. Ne treba nam drugi console log
// console.log(k);

// c = 4;
// d = 3;
// x = (c++) * (--d); // c = 4 , d = 2
// console.log(c, d, x) // c = 5 , d = 2 , x = 8

// console.log(7 % 2); // 7 = 3 * 2 - Ostatak 1.

// console.log(160 % 60) // 180 = 3 * 60 + 0

// console.log(4 ** 3); //  4x3x3x3

// c = 3
// d = (c ** 3) + 1;  // d == 3x3x3 +1 
// console.log(d);

let cenaRobe = 1000;
console.log(`Cena robe je: ${cenaRobe}`);
let unetaNovcanica = 1600;
console.log(`Uneta novcanica je: ${unetaNovcanica}`);

let kusur = unetaNovcanica - cenaRobe;
console.log(`Kusur je: ${unetaNovcanica} - ${cenaRobe}, i resenje je: ${kusur}`);


let dan = 1;
let mesec = "Novembar";
let godina = 2008;

let ddmmyy = `${dan}.${mesec}.${godina}`;
console.log(`ddmmyy = ${ddmmyy}`);

let yymmdd = `${godina}.${mesec}.${dan}`;
console.log(`yymmdd = ${yymmdd}`);

let eur = 15;
let din = eur * 118;
let dolar = eur * 1.13;
console.log(`Imamo ${eur} eura , a to je: ${din} dinara `);
console.log(`Imamo ${eur} eura , a to je: ${dolar} dolara `);

eur = 52;
dolar = eur * 0.89;

console.log(`Imamo ${dolar} dolara , a to je: ${eur} eura `);

let celzijus = 29;
let ferenhajt = (celzijus * 1.8) + 32;
let kelvin = celzijus + 273.15;
console.log(`${celzijus} celzijusa = ${ferenhajt} farenhajta`);
console.log(`${celzijus} celzijusa = ${kelvin} kelvina.`);



