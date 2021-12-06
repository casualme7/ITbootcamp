let a = 1;

while (a <= 5) {
    console.log(`Na radu je broj`, a);
    a++
}
console.log("______________________")

// Moze i ovako
// let i = 1

// for (; i <= 5; i++) {
//     console.log(`For petlja`, i)
// }

for (let i = 1; i <= 5; i++) {
    console.log(`For petlja`, i)
}
console.log("______________________")

// Ispisati sve brojeve od 20 do 1
for (let m = 20; m >= 1; m--) {
    console.log(m)
}
console.log("______________________")

// Ispisati sve parne brojeve od 20 do 1
for (let n = 20; n >= 1; n--) {
    if (n % 2 == 0) {
        console.log(n)
    }
}
console.log("______________________")

//Ispisati dvostruku vrednost brojeva od 5 do 15 
for (let x = 5; x <= 15; x++) {
    console.log(x * x);
}
console.log("______________________")

//Odrediti sumu brojeva od 1 do n2

let n2 = 100;
let total = 0;

for (let j = 1; j <= n2; j++) {
    total += j;
}
console.log(total)
console.log("______________________")

//OOdrediti proizvod brojeva od v do b;

let v = 10
let b = 11
let total1 = 1;

for (i = v; i <= b; i++) {
    total1 *= i;
}
console.log(total1);
console.log("______________________")

// //Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML - u ispisati svaku od sličica uz pomoć brojača(iteratora).

for (let img = 1; img <= 3; img++) {
    document.body.innerHTML += `<img src="Slike/${img}.png" alt="">`
}


//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

let broj = 0;

for (let f = 5; f <= 150; f++) {
    if (f % 13 === 0) {
        console.log(f);
        broj++;
    }
}
console.log(`Ima ih ${broj}`)
console.log("______________________")

//----------------------------------
// 15 ZADATAK

// let n = 3;
// let m = 45;
// let br = 0;
// let suma = 0;

// for (let i = n; i <= m; i++) {
//     if (i % 10 == 4) {
//         console.log(i);
//         suma += i;
//         br++;
//     }
// }
// console.log(`Broj brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je ${br} `);
// console.log(`Suma je ${suma}`);

// 16 ZADATAK
// let n = 2;
// let m = 15;
// let a1 = 4;
// let suma = 0;

// for (let i = n; i <= m; i++) {
//     if (i % a != 0) {
//         suma += i;
//     }
// } console.log(`Suma projeva od ${n} do ${m} koji nisu deljivi brojevima ${a} je ${suma}`)
// -------------------------------------

// 18 ZADATAK

// let k = 6;
// let deljivSa = 0;

// for (let i = 1; i <= k; i++) {
//     if (k % i == 0) {
//         console.log(`Broj ${k} je deljiv sa ${i}`);
//         deljivSa++;
//     }
// }
// console.log(`Broj ${k} je deljiv sa ${deljivSa} brojeva :)`)

// ZADATAK 19

// let k = 673;
// let delilac = k;
// let saKoliko = 0;

// while (delilac >= 0) {
//     if (k % delilac == 0) {
//         saKoliko++
//     }
//     delilac--;
// }
// if (saKoliko == 2) {
//     console.log(`Broj ${k} je prost broj`)
// } else {
//     console.log(`Broj ${k} je slozen broj`)
// }
