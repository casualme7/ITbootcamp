import { Boja } from "./Boja.js";
import { Datum } from "./Datum.js";
import { Rudnik } from "./Rudnik.js";
import { Autobus } from "./Autobus.js";
import { FMRadio } from "./FMRadio.js";
import { Krug } from "./Krug.js";
import { Cipela } from "./Cipela.js";
import { Plivac } from "./Plivac.js";
import { Automobil } from "./Automobil.js";
import { Student } from "./Student.js";

// ZADATAK 1:
console.log("ZADATAK 1:");


// ZADATAK 2:
console.log("");
console.log("ZADATAK 2:");

let godina1 = new Datum(1, 11, 1995);
let godina2 = new Datum(22, 1, 2021);
let godina3 = new Datum(16, 11, 1968);
let godina4 = new Datum(1, 11, 1995);

let ranijiDatum = (d1, d2) => {
    if (d1.godina < d2.godina) {
        d1.ispis();
    } else if (d2.godina < d1.godina) {
        d2.ispis();
    } else if (d1.godina == d2.godina && d1.mesec < d2.mesec) {
        d1.ispis();
    } else if (d2.godina == d1.godina && d2.mesec < d1.mesec) {
        d2.ispis();
    } else if (d1.godina == d2.godina && d1.mesec == d2.mesec && d1.dan < d2.dan) {
        d1.ispis();
    } else if (d2.godina == d1.godina && d2.mesec == d1.mesec && d2.dan < d1.dan) {
        d2.ispis();
    } else {
        console.log("Datumu su jednaki.");
    }
};
ranijiDatum(godina4, godina3);

// ZADATAK 3:
console.log("");
console.log("ZADATAK 3:");

let radnik1 = new Rudnik("Miljan", 94000);
let radnik2 = new Rudnik("Nemanja", 186000);
let radnik3 = new Rudnik("Marijana", 113000);
let radnik4 = new Rudnik("Kecman", 59000);
let radnici = [radnik1, radnik2, radnik3, radnik4];

let maxPlata = (arr) => {
    let max = arr[0];
    arr.forEach(el => {
        if (max.plata < el.plata) {
            max = el;
        }
    })
    return max.ispis();
};
console.log(maxPlata(radnici));
console.log("----------------");

let maxPlataOsoba = arr => {
    let max = arr[0];
    console.log(`${max.ime}:`, max.plata)
    arr.forEach(el => {
        if (el.plata > max.plata) {
            console.log(`${el.ime}:`, el.plata);
            max = el;
        }
    })
};
maxPlataOsoba(radnici);

// ZADATAK 4:
console.log("");
console.log("ZADATAK 4:");

let autobus1 = new Autobus("BG-1526", 35);
let autobus2 = new Autobus("NS-6123", 47);
let autobus3 = new Autobus("NI-4277", 23);
let autobusi = [autobus1, autobus2, autobus3];

let ukupnoSedista = arr => {
    let sum = 0;
    arr.forEach(el => {
        sum += el.sedista;
    })
    return sum;
};
console.log("Ukupno sedista:", ukupnoSedista(autobusi));

let maksSedista = arr => {
    let max = arr[0];
    arr.forEach(el => {
        if (el.sedista > max.sedista) {
            max = el;
        }
    })
    max.ispis();
};
maksSedista(autobusi);

let ljudi = (ljudibr, arr) => {
    if (ukupnoSedista(arr) >= ljudibr) {
        return true;
    } else {
        return false;
    }
};
console.log("Da li je moguce smestiti ljude:", ljudi(101, autobusi));

// ZADATAK 5:
console.log("");
console.log("ZADATAK 5:");

let stanica1 = new FMRadio("Radio S", 92.5, 6);
let stanica2 = new FMRadio("NAXI Radio", 88.7, 2);
let stanica3 = new FMRadio("Rock R.", 106.6, 14);
let stanica4 = new FMRadio("ZoomZoom", 94.4, 20);
let stanice = [stanica1, stanica2, stanica3, stanica4];

let srednjaFrekvencija = arr => {
    let sum = 0;
    arr.forEach(el => {
        sum += el.frekvencija;
    })
    if (isNaN(sum)) {
        sum = "Neka of frekvencija je veca ili manja od granicne frekvencije";
        return sum;
    }
    return (sum / arr.length).toFixed(1);
    // Ako se u frekvenciji stavi iznad ili ispod granicne vrednosti
    // frekvencije, vrednost te ce biti "Netacna Frekvencija", samim
    // tim ce prosek onda returnovati NaN, bug ili feature? (Ja bih rekao feature)
};
console.log("Prosecna frekvencija:", srednjaFrekvencija(stanice), "HZ");

let najbliziMax = arr => {
    let max = arr[0].frekvencija;
    arr.forEach(el => {
        if (el.frekvencija > max) {
            max = el;
        }
    })
    return `${max.stanica} ${max.frekvencija}`;
};
console.log("Stanica najbliza max HZ-u:", najbliziMax(stanice));

// ZADATAK 6:
console.log("");
console.log("ZADATAK 6:");

let krug1 = new Krug(12);
let krug2 = new Krug(14);
let krug3 = new Krug(16);
let krugovi = [krug1, krug2, krug3];

console.log("Obim Kruga 1:", krug1.obimKruga());
console.log("Obim Kruga 2:", krug2.obimKruga());
console.log("Povrsina Kruga 2:", krug2.povrsinaKruga());
// Nisam hteo da fixujem decimale ovde.

let upisaniKrug = (x, y) => {
    return (x.povrsinaKruga() <= y.povrsinaKruga()) ? true : false;
};
console.log("Prvi krug upisati u drug:", upisaniKrug(krug1, krug2));

let rastuci = arr => {
    let brojac = 1;
    let pocetak = arr[0].obimKruga();
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].obimKruga() >= pocetak) {
            brojac++;
            pocetak = arr[i].obimKruga();
        }
    }
    return (brojac == arr.length) ? true : false;
}
console.log("Rastuci krugovi u array-u:", rastuci(krugovi));

// ZADATAK 7:
console.log("");
console.log("ZADATAK 7:");

let cipela1 = new Cipela("Addidas Walk", 45, ["usij", "prosiri", "SREDI", "zalepi"]);
let cipela2 = new Cipela("Reebok Classic", 42, ["usij", "zalepi"]);
let cipela3 = new Cipela("Nije AiR Max", 48, ["prosiri", "SREDI", "UREDI"]);

let cipele = [cipela1, cipela2, cipela3];

let radi = ime => {
    ime.nizPrepravki.forEach(o => {
        if (o === "zalepi") {
            ime.zalepi();
        }
        if (o === "prosiri") {
            ime.prosiri();
        }
        if (o === "usij") {
            ime.usij();
        }
        if (o !== "zalepi" && o !== "prosiri" && o !== "usij") {
            console.log("Nepoznata prepravka");
        }
    })
};
radi(cipela1);
console.log("----------------")

let najvisePrepravki = arr => {
    let trenutniMax = arr[0];
    arr.forEach(el => {
        if (el.nizPrepravki.length > trenutniMax.nizPrepravki.length) {
            trenutniMax == el;
        }
    })
    console.log("Najvise prepravki:", trenutniMax.naziv, "-", trenutniMax.nizPrepravki.length);
}
najvisePrepravki(cipele);

let brojPrepravki = (arr, prepravka) => {
    let brojac = 0;
    arr.forEach(el => {
        el.nizPrepravki.forEach(o => {
            if (o === prepravka) {
                brojac++
            }
        })
    })
    return brojac;
}
console.log("Broj cipela sa unesenom prepravkom:", brojPrepravki(cipele, "usij"));

// ZADATAK 8:
console.log("");
console.log("ZADATAK 8:");

let student1 = new Student("9285271272214", "Sundjer", "Bob", [7, 7, 8, 10, 9]);
let student2 = new Student("6824125125679", "Deda", "Mraz", [9, 8, 10, 10, 10]);
let student3 = new Student("0101010101010", "Petar", "Pan", [7, 8, 8, 6, 6]);

let studenti = [student1, student2, student3];

let imePrezime = (i, p) => {
    let brojac = 0;
    studenti.forEach(el => {
        if (el.ime === i && el.prezime === p) {
            brojac++;
        }
    })
    return brojac;
}
console.log("Broj studenata sa unetim i + p:", imePrezime("Sundjer", "Bob"))

let srednjaOcena = () => {
    let sum = 0;
    studenti.forEach(el => {
        sum += el.prosecnaOcena;
    })
    let resenje = sum / studenti.length
    console.log("Prosecna ocena svih studenata:", resenje.toFixed(2))
    return resenje;
}
srednjaOcena()

console.log("ZAVRSITI ZAD:", 8)

// ZADATAK 9:
console.log("");
console.log("ZADATAK 9:");

let plivac1 = new Plivac("Jakoslav", 1992, 12.94)
let plivac2 = new Plivac("Lignjoslav", 1995, 11.98)
let plivac3 = new Plivac("Srboslav", 1981, 12.54)
let plivac4 = new Plivac("Rodoslav", 2002, 13.11)
let plivac5 = new Plivac("Dragoslav", 1998, 12.07)
let plivac6 = new Plivac("Vukoslav", 1982, 14.33)
let plivac7 = new Plivac("Miroslav", 1987, 13.91)
let plivac8 = new Plivac("Branislav", 1996, 11.55)
let plivac9 = new Plivac("Dzukoslav", 2000, 12.88)
let plivac10 = new Plivac("Drnroslav", 2008, 18.01)

let plivaci = [plivac1, plivac2, plivac3, plivac4, plivac5, plivac6, plivac7, plivac8, plivac9, plivac10];

let top10 = arr => {
    let top10arr = [];
    arr.forEach(el => {
        top10arr.push(el.najboljiRezultat);
    })
    top10arr.sort();
    let brojac = 0;
    for (let i = 0; i < top10arr.length; i++) {
        brojac++
        console.log(`${brojac})`, top10arr[i])
    }
}
top10(plivaci);
console.log("----------------")

let norma = (normaBr, arr) => {
    let normaArr = [];
    arr.forEach(el => {
        if (el.najboljiRezultat < normaBr) {
            normaArr.push(el)
        }
    })
    return normaArr;
}
console.log("Niz plivaca koji su ispunili normu:", norma(12.7, plivaci));

console.log("----------------")
let normaNajmladji = normaArr => {
    let najmladji = normaArr[0];
    normaArr.forEach(el => {
        if (el.godinaRodjenja > najmladji.godinaRodjenja) {
            najmladji = el;
        }
    })
    console.log(`Najmladji koji ispunjava normu - Ime: ${najmladji.ime}, Godina Rodjenja: ${najmladji.godinaRodjenja}, Najbolji Rezultat: ${najmladji.najboljiRezultat} sec`);
}
normaNajmladji(plivaci);

// ZADATAK 10:
console.log("");
console.log("ZADATAK 10:");

let automobil1 = new Automobil(150, 0, 80)
let automobil2 = new Automobil(210, 0, 40)

console.log("Trenurna brzina A1:", automobil1.trenutnaBrzina);
automobil1.ubrzaj(5000)
console.log("Trenurna brzina A1:", automobil1.trenutnaBrzina);
console.log("----------------")
console.log("Test za minBrzinu A2:", automobil2.trenutnaBrzina);
automobil2.uspori(152);
console.log("Test za minBrzinu A2:", automobil2.trenutnaBrzina);

// KRAJ
// GOTOVO
// DOVIDJENJA
// POZZZZZZZZZZZ
console.log("");
console.log("THE END");