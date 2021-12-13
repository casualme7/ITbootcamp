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