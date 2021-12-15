console.log("Funkcije")
console.log("---------")

function zdravo() {
    console.log("Zdravo Svete")
}

zdravo();
zdravo();
console.log("HELLO!")
zdravo();

function stampaj(LOL) {
    console.log(LOL);
}

stampaj("Jelena");
stampaj("Stefan");
let ime = "Sofija";
stampaj(ime);

//////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani koristnik je: ${ime} ${prezime}.`)
}

korisnik("Miljan", "Pantovic");
korisnik("Nikola", "Jovanovic");

//////////////////////////////

function koristnikGodine(ime, prezime, godine) {
    console.log(`Novi korisnik je ${ime} ${prezime} i ima ${godine} godina`)
}

koristnikGodine("Dragoslav", "Nikolic", 2)

///////////////////////////////

function zbir2broja(x, y) {
    let zbir = x + y;
    console.log(zbir)
}

zbir2broja(29, 14)

////////////////////////

function vratiZbirDvaBroja(a, b) {
    let zbir = a + b;
    return zbir
}

let rez = vratiZbirDvaBroja(25, 12);
console.log(rez);
rez = vratiZbirDvaBroja(252, 152);
console.log(rez);

//////////////////////////

let rez1 = vratiZbirDvaBroja(4, 6);
let rez2 = vratiZbirDvaBroja(5, 7);
let rez3 = vratiZbirDvaBroja(rez1, rez2);
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

//////////////////////////

function voda(temp) {
    console.log(`Uneli ste temperaturu od ${temp} stepeni C`)
    if (temp <= 0) {
        console.log("Voda je u cvrstom agregatnom stanju");
    } else if (temp >= 100) {
        console.log("Voda je u gasovitom agregatnom stanju")
    } else {
        console.log("Voda je u tecnom agregatnom stanju")
    }
}

voda(525);

////////////////////////////

function paranNeparan(x) {
    if (x % 2 == 0) {
        console.log(`Tacno! Broj`, x, `je paran.`)
    } else {
        console.log(`Netacno! Broj`, x, `je neparan.`)
    }
}
paranNeparan(12);

///////////////////////////

function maks2(x1, x2) {
    if (x1 > x2) {
        console.log(`Broj`, x1, `je veci od`, x2);
    } else {
        console.log(`Broj`, x2, `je veci od`, x1);
    }
}
maks2(255, 52)

////////////////////////

function racunaj(br1, br2, operacija) {
    if (operacija == "+") {
        let rezultat = br1 + br2;
        console.log(rezultat);
    } else if (operacija == "-") {
        let rezultat = br1 - br2;
        console.log(rezultat);
    } else if (operacija == "*") {
        let rezultat = br1 * br2;
        console.log(rezultat);
    } else if (operacija == "/") {
        if (br2 == 0) {
            console.log("Deljenje nije dozvoljeno!");
        } else {
            let rezultat = br1 + br2;
            console.log(rezultat);
        }
    } else {
        console.log("Pogresan unos");
    }
}

racunaj(52, 3, "-")

//////////////////////////

if (true) {
    let test = "Zdravo"; // Linija 1 
    console.log(test); // ispisuje zdravo koji je dodaljen u liniji 1
    if (true) {
        let test = "Hello"; // Linija 2
        console.log(test); // Ovde vidi test iz linije 2
    }
    console.log(test); // Ovde vidi testi z linije 1
}
// console.log(test); // Ovde se ne vidi uopste test

//////////////////////////

// Let vidim u okviru scope , dok VAR vidim i izvan scope

if (true) {
    var proba = "proba"; // Ako ne stavimo ni let ni car ispred 
    //promenljive, promenljiva se racuna ko da je var!!!
}
console.log(proba);;

////////////////////////

function neparan(n) {
    if (n % 2 != 0) {
        return true; //neparan broj
    } else {
        return false; //paran broj
    }
}
let nep = neparan(13);
console.log(nep);

function neparan1(n) {
    let rez = true;
    if (n % 2 == 0) {
        rez = false
    }
    return rez;
}
let nep1 = neparan1(6);
console.log(nep1);

function neparan2(n) {
    return n % 2 != 0
}
let nep2 = neparan2(164);
console.log(nep2);

//////////////////////////

// ZADATAK 4a:

function maks2(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let max2 = maks2(5, 7)
console.log(`Veci broj je:`, max2)

// ZADATAK 4b:

function maks4(a, b, c, d) {
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

/// zadatak 4 jelenin predlog 

function maks4_jelena(a, b, c, d) {
    let max6 = maks2(a, b);
    let max7 = maks2(c, d);
    let max8 = maks2(max6, max7);
    return max8;
}

let max4broja = maks4_jelena(4, 512, 12, 51);
console.log(max4broja)

// ZADATAK 5: 
function image(url) {
    document.body.innerHTML += `<img src="${url}" alt="">`
}

image("1.jpg")

let max4 = maks4(2, 52, 125, 7);
console.log(`Od 4 broja najveci je:`, max4);

// ZADATAK 6;

function collor(clr) {
    document.body.innerHTML += `<p style="color: ${clr};">${clr} paragraf</p>`
}

collor("Red");
collor("Blue");
collor("Yellow");
collor("Green");


// ZADATAK 7:

function sedmiDan(dan) {
    if (dan == 1) {
        console.log("Ponedeljak")
    } else if (dan == 2) {
        console.log("Utorak")
    } else if (dan == 3) {
        console.log("Sreda")
    } else if (dan == 4) {
        console.log("Cetvrtak")
    } else if (dan == 5) {
        console.log("Petak")
    } else if (dan == 6) {
        console.log("Subota")
    } else if (dan == 7) {
        console.log("Nedelja")
    } else if (dan == 0) {
        console.log("Nedeljak")
    } else {
        console.log("Pogresan unos.")
    }
}
sedmiDan(2);

// ZADATAK 8:

function deljivSaTri(broj1, broj2) {
    let brojx = broj1;
    let koliko = 0;
    while (brojx <= broj2) {
        if (brojx % 3 == 0) {
            koliko++
        }
        brojx++
    }
    console.log(`Od`, broj1, `do`, broj2, `ima`, koliko, `brojeva deljivih sa`, 3);
}
deljivSaTri(245, 793);

// ZADATAK 9:

function sumiraj(n, m) {
    let sumNM = 0;
    let nx = n
    while (nx <= m) {
        sumNM += nx
        nx++
    }
    console.log("Suma od", n, "do", m, "iznosi", sumNM)
}
sumiraj(2, 10)


// ZADATAK 10;

function mnozi(n1, m1) {
    let mnzNM = 1;
    let nx1 = n1;
    while (nx1 <= m1) {
        mnzNM *= nx1
        nx1++
    }
    console.log("Proizvod od", n1, "do", m1, "iznosi", mnzNM)
}
mnozi(2, 4)

// ZADATAK 11:

function asredina(n3, m3) {
    let asNM = 0;
    let nx3 = n3
    let asrBr = 0;
    while (nx3 <= m3) {
        asNM += nx3
        asrBr++;
        nx3++
    }
    console.log("Ar sred", n3, "do", m3, "iznosi", asNM / asrBr)
}
asredina(252, 3150)

//ZADATAK 12:

//ZADATAK 13:

//ZADATAK 14:

function istarecenica(text) {
    for (let i = 0; i < 5; i++) {
        document.body.innerHTML += `<p style="font-size: ${i * 10}px;">${text}</p>`
    }
}
istarecenica("x10 pixela")

// ZADATAK 15:

