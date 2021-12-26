let student1 = {
    ime: "Miljan",
    prezime: "Pantovic",
    godinaStudija: 1,
    ocene: [7, 8, 10, 10, 9, 8],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student2 = {
    ime: "Nemanja",
    prezime: "Djokic",
    godinaStudija: 4,
    ocene: [7, 7, 8, 6, 10, 6],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student3 = {
    ime: "Bogdan",
    prezime: "Mladenovic",
    godinaStudija: 2,
    ocene: [7, 9, 9, 9, 9, 9],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student4 = {
    ime: "Darko",
    prezime: "Babovic",
    godinaStudija: 4,
    ocene: [6, 7, 8, 9, 10, 10],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student5 = {
    ime: "Nikola",
    prezime: "Pantovic",
    godinaStudija: 5,
    ocene: [10, 9, 8, 7, 6, 6],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student6 = {
    ime: "Nikola",
    prezime: "Damnjanovic",
    godinaStudija: 2,
    ocene: [10, 10, 10, 10, 10, 9],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student7 = {
    ime: "Dzizs",
    prezime: "Krajst",
    godinaStudija: 5,
    ocene: [10, 10, 10, 9, 9, 9],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student8 = {
    ime: "Deda",
    prezime: "Mraz",
    godinaStudija: 2,
    ocene: [10, 10, 10, 10, 10, 10],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student9 = {
    ime: "Smrdo",
    prezime: "Smrdljivi",
    godinaStudija: 1,
    ocene: [7, 6, 7, 7, 6, 6],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let student10 = {
    ime: "Bruka Jedna",
    prezime: "Odvratna Prljava",
    godinaStudija: 4,
    ocene: [7, 6, 7, 6, 6, 6],
    prosek() {
        let brojac = 0;
        this.ocene.forEach(el => {
            brojac += el;
        })
        return brojac / this.ocene.length;
    }
};

let studenti = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

// Zadatak 1:
// Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, 
// a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.
console.log("ZADATAK 1:")

let prvoSlovo = (arr, slovo) => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.prezime[0] === slovo) {
            brojac++;
            console.log(brojac, `${el.ime} ${el.prezime}`)
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
prvoSlovo(studenti, "P");

// Zadatak 2:
// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena 
// svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
console.log("");
console.log("ZADATAK 2:")

let stringImePrezime = (arr, imeString, prezimeString) => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.ime.includes(imeString) && el.prezime.includes(prezimeString)) {
            brojac++;
            console.log(brojac, `${el.ime} ${el.prezime}`);
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
stringImePrezime(studenti, "B", "o");

// Zadatak 3:
// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja
// godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
console.log("");
console.log("ZADATAK 3:")

let ispisGodineStudija = (arr, godina) => {
    let brojac = 0;
    let brojac2 = 0;
    arr.forEach(el => {
        if (el.godinaStudija == godina) {
            brojac++
            console.log(brojac, `${el.ime} ${el.prezime} - Godina ${el.godinaStudija}`)
            brojac2++;
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
    return brojac2;
};
console.log(`Broj studenata na odredjenoj godini :`, ispisGodineStudija(studenti, 4));

// Zadatak 4:
// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom.
// Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
console.log("");
console.log("ZADATAK 4:")

let maximalniProsek = (arr) => {
    let brojac = 0;
    let max = arr[0].prosek();
    arr.forEach(el => {
        if (el.prosek() > max) {
            max = el.prosek();
        }
    })
    arr.forEach(el => {
        if (el.prosek() === max) {
            brojac++
            console.log(brojac, `${el.ime} ${el.prezime}`)
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
maximalniProsek(studenti);

// Zadatak 5:
// Student je prosečan ako nema nijednu šesticu i nijednu desetku.
// Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.
console.log("");
console.log("ZADATAK 5:")

let prosecanStudent = arr => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.ocene.indexOf(10) == -1 && el.ocene.indexOf(6) == -1) {
            brojac++;
            console.log(brojac, `${el.ime} ${el.prezime}`)
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
prosecanStudent(studenti);

// Zadatak 6:
// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama,
// i pri tome je broj desetki barem duplo veći od broja devetki.
// Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.
console.log("");
console.log("ZADATAK 6:")

let extraStudent = arr => {
    let brojac = 0;
    arr.forEach(el => {
        let desetke = 0;
        let devetke = 0;
        if (el.ocene.indexOf(6) == -1 && el.ocene.indexOf(7) == -1 && el.ocene.indexOf(8) == -1) {
            el.ocene.forEach(o => {
                if (o === 10) {
                    desetke++;
                } else if (o === 9) {
                    devetke++;
                }
            })
            if (desetke > (devetke * 2)) {
                brojac++
                console.log(brojac, `${el.ime} ${el.prezime}`);
                console.log(`Desetke:`, desetke, `Devetke:`, devetke, `Prolaz:`, desetke > devetke)
            }
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
}
extraStudent(studenti);

// Zadatak 7:
// Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama
// a broj devetki je manji od godine studije na kojoj se student nalazi.
// Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
console.log("");
console.log("ZADATAK 7:")

let kidaStudent = arr => {
    let devetke = 0
    let brojac = 0
    arr.forEach(el => {
        if (el.ocene.indexOf(6) == -1 && el.ocene.indexOf(7) == -1 && el.ocene.indexOf(8) == -1) {
            el.ocene.forEach(o => {
                if (o === 9) {
                    devetke++
                }
            })
            if (devetke < el.godinaStudija) {
                brojac++;
                console.log(brojac, `${el.ime} ${el.prezime}`)
            }
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
kidaStudent(studenti);

// Zadatak 8:
// Student “razbija” ako je sve ispite položio sa ocenom deset.
// Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1).
// (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit,
// ao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine).
// Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
console.log("");
console.log("ZADATAK 8:")

let studentRazbija = arr => {
    let desetke = 0;
    let brojac = 0;
    arr.forEach(el => {
        if (el.ocene.indexOf(6) == -1 && el.ocene.indexOf(7) == -1 && el.ocene.indexOf(8) == -1 && el.ocene.indexOf(9) == -1) {
            el.ocene.forEach(o => {
                if (o === 10) {
                    desetke++;
                }
            })
            if (desetke >= 5 * (el.godinaStudija - 1) && el.godinaStudija > 1) {
                brojac++;
                console.log(brojac, `${el.ime} ${el.prezime}`)
            }
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
studentRazbija(studenti);

// Zadatak 9:
// Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7.
//Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.
console.log("");
console.log("ZADATAK 9:")

let aljkavStudent = arr => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.ocene.indexOf(8) == -1 && el.ocene.indexOf(9) == -1 && el.ocene.indexOf(10) == -1) {
            brojac++;
            console.log(brojac, `${el.ime} ${el.prezime}`)
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
aljkavStudent(studenti);

// Zadatak 10:
// Student se “bruka” ako nije student prve godine, a broj položenih ispita 
// je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7.
// Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.
console.log("");
console.log("ZADATAK 10:")

let brukaStudent = arr => {
    brojac = 0;
    arr.forEach(el => {
        if (el.godinaStudija > 1) {
            if (el.ocene.length < 3 * (el.godinaStudija - 1)) {
                if (el.ocene.indexOf(8) == -1 && el.ocene.indexOf(9) == -1 && el.ocene.indexOf(10) == -1) {
                    brojac++;
                    console.log(brojac, `${el.ime} ${el.prezime}`);
                }
            }
        }
    })
    if (brojac == 0) {
        console.log("Nothing to show")
    }
};
brukaStudent(studenti);

// DRUGI DEO // 
console.log("")
console.log("")
console.log("DRUGI DEO:")
console.log("")
//////////////////////////////////////////////////////

let polaznik1 = {
    ime: "Jason",
    prezime: "Statham",
    ocena: 97,
}

let polaznik2 = {
    ime: "Leonardo",
    prezime: "DeCaprio",
    ocena: 85,
}

let polaznik3 = {
    ime: "Robert",
    prezime: "Downey Jr.",
    ocena: 91,
}

let polaznik4 = {
    ime: "Cris",
    prezime: "Evans",
    ocena: 65,
}

let polaznik5 = {
    ime: "The",
    prezime: "Rock",
    ocena: 77,
}

let polaznik6 = {
    ime: "Anthony",
    prezime: "Mackie",
    ocena: 59,
}

let polaznik7 = {
    ime: "Benedict",
    prezime: "Cumberbatch",
    ocena: 100,
}

let polaznik8 = {
    ime: "Connor",
    prezime: "McGreggor",
    ocena: 95,
}

let polaznik9 = {
    ime: "Stipe",
    prezime: "Miocic",
    ocena: 88,
}

let kurs1 = {
    naziv: "Razvoj veb stranica: JS",
    grad: "Beograd",
    polazici: [polaznik1, polaznik3, polaznik5, polaznik9],
    prosecnaOcenaStudenata() {
        let prosecnaOcena = 0;
        this.polazici.forEach(el => {
            prosecnaOcena += el.ocena
        })
        return prosecnaOcena / this.polazici.length
    },
    uspesanKurs() {
        for (let i = 0; i < this.polazici.length; i++) {
            if (this.polazici[i].ocena < 66) {
                return false
            }
        }
        return true;
    },
    minimalnaOcena() {
        let min = this.polazici[0].ocena;
        this.polazici.forEach(el => {
            if (el.ocena < min) {
                min = el.ocena;
            }
        })
        return min;
    }
}

let kurs2 = {
    naziv: "Razvoj veb stranica: PHP",
    grad: "Novi Sad",
    polazici: [polaznik2, polaznik4, polaznik6, polaznik8, polaznik5],
    prosecnaOcenaStudenata() {
        let prosecnaOcena = 0;
        this.polazici.forEach(el => {
            prosecnaOcena += el.ocena
        })
        return prosecnaOcena / this.polazici.length
    },
    uspesanKurs() {
        for (let i = 0; i < this.polazici.length; i++) {
            if (this.polazici[i].ocena < 66) {
                return false
            }
        }
        return true;
    },
    minimalnaOcena() {
        let min = this.polazici[0].ocena;
        this.polazici.forEach(el => {
            if (el.ocena < min) {
                min = el.ocena;
            }
        })
        return min;
    }
}

let kurs3 = {
    naziv: "Testiranje softvera: QA",
    grad: "Beograd",
    polazici: [polaznik7, polaznik8, polaznik9, polaznik4],
    prosecnaOcenaStudenata() {
        let prosecnaOcena = 0;
        this.polazici.forEach(el => {
            prosecnaOcena += el.ocena
        })
        return prosecnaOcena / this.polazici.length
    },
    uspesanKurs() {
        for (let i = 0; i < this.polazici.length; i++) {
            if (this.polazici[i].ocena < 66) {
                return false
            }
        }
        return true;
    },
    minimalnaOcena() {
        let min = this.polazici[0].ocena;
        this.polazici.forEach(el => {
            if (el.ocena < min) {
                min = el.ocena;
            }
        })
        return min;
    }
}

let kurs4 = {
    naziv: "Osnove programiranja: Java",
    grad: "Nis",
    polazici: [polaznik1, polaznik5, polaznik6, polaznik3],
    prosecnaOcenaStudenata() {
        let prosecnaOcena = 0;
        this.polazici.forEach(el => {
            prosecnaOcena += el.ocena
        })
        return prosecnaOcena / this.polazici.length
    },
    uspesanKurs() {
        for (let i = 0; i < this.polazici.length; i++) {
            if (this.polazici[i].ocena < 66) {
                return false
            }
        }
        return true;
    },
    minimalnaOcena() {
        let min = this.polazici[0].ocena;
        this.polazici.forEach(el => {
            if (el.ocena < min) {
                min = el.ocena;
            }
        })
        return min;
    }
}

let kurs5 = {
    naziv: "POKIDAN KURS - TEST",
    grad: "Nis",
    polazici: [polaznik1, polaznik2, polaznik3, polaznik7, polaznik8, polaznik9],
    prosecnaOcenaStudenata() {
        let prosecnaOcena = 0;
        this.polazici.forEach(el => {
            prosecnaOcena += el.ocena
        })
        return prosecnaOcena / this.polazici.length
    },
    uspesanKurs() {
        for (let i = 0; i < this.polazici.length; i++) {
            if (this.polazici[i].ocena < 66) {
                return false
            }
        }
        return true;
    },
    minimalnaOcena() {
        let min = this.polazici[0].ocena;
        this.polazici.forEach(el => {
            if (el.ocena < min) {
                min = el.ocena;
            }
        })
        return min;
    }
}

let kursevi = [kurs1, kurs2, kurs3, kurs4, kurs5];

// Zadatak 1:
// Funkciji se prosleđuje niz kurseva i string koji predstavlja grad,
// a vraća broj kurseva koji se održavaju u tom gradu.
console.log("");
console.log("ZADATAK 1:")

let kursGrad = (arr, grad) => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.grad === grad) {
            brojac++;
        }
    })
    return `${grad} ima ${brojac} kursa.`
}
console.log(kursGrad(kursevi, "Beograd"));

// Zadatak 2:
// Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv,
// a vraća broj kurseva koji sadrže dati naziv.
console.log("");
console.log("ZADATAK 2:")

let imeKursa = (arr, nazivKursa) => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.naziv === nazivKursa) {
            brojac++
        }
    })
    return `Broj kurseva sa nazivom: "${nazivKursa}" je = ${brojac}`
}
console.log(imeKursa(kursevi, "Testiranje softvera: QA"))

// Zadatak 3:
// Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad
// a u kojem se nalazi maksimalan broj polaznika. 
//  Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.
console.log("");
console.log("ZADATAK 3:")

let maxBrojPolaznika = arr => {
    let max = arr[0].polazici.length
    arr.forEach(el => {
        if (el.polazici.length > max) {
            max = el.polazici.length
        }
    })
    arr.forEach(el => {
        if (el.polazici.length === max) {
            console.log(`Kurs sa maximalnim br polaznija je: ${el.naziv} i on se nalazi u gradu: ${el.grad}`);
        }
    })
}
maxBrojPolaznika(kursevi)

// Zadatak 4:
// Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime
// a ispisuje sve polaznike (ime i prezime polaznika, kao i
// naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.
console.log("");
console.log("ZADATAK 4:")

let traziPolaznike = (arr, traziPrezime) => {
    arr.forEach(el => {
        el.polazici.forEach(i => {
            if (i.prezime === traziPrezime) {
                console.log(`Ime: ${i.ime}, Prezime: ${i.prezime}, Naziv Kursa: ${el.naziv}, Grad: ${el.grad}`)
            }
        })
    })
}
traziPolaznike(kursevi, "Miocic");

// Zadatak 5:
// Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa
// i grad gde je ostvarena najbolja prosečna ocena na završnom testu.
// Ukoliko ima više takvih kurseva, ispisati bilo koji.
console.log("");
console.log("ZADATAK 5:")

let najboljaProsecnaOcena = arr => {
    let max = arr[0].prosecnaOcenaStudenata();
    arr.forEach(el => {
        if (el.prosecnaOcenaStudenata() > max) {
            max = el.prosecnaOcenaStudenata();
        }
    })
    arr.forEach(el => {
        if (max === el.prosecnaOcenaStudenata()) {
            console.log(`Naziv Kursa: ${el.naziv}, Grad ${el.grad}, Prosecna Ocena Studenata: ${max}`)
        }
    })
}
najboljaProsecnaOcena(kursevi);

// Zadatak 6:
// Kurs je uspešan ako su svi polaznici položili završni test
// (svi polaznici ostvarili iznad 65%).
// Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.
console.log("");
console.log("ZADATAK 6:")

let uspesanKursFunkcija = arr => {
    let brojac = 0;
    arr.forEach(el => {
        if (el.uspesanKurs()) {
            brojac++;
            console.log(`Uspesan Kurs ${brojac}: ${el.naziv}`);
        }
    })
}
uspesanKursFunkcija(kursevi);

// Zadatak 7:
// Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan.
// Funkciji se prosleđuje niz kurseva i grad,
//  a vraća da li dati grad kida (funkcija vraća true ili false).
console.log("");
console.log("ZADATAK 7:")

let gradKida = (arr, grad) => {
    let kolkoKurseva = 0;
    let kolkoUspesnihKurseva = 0;
    arr.forEach(el => {
        if (el.grad === grad) {
            kolkoKurseva++;
        }
    })
    arr.forEach(el => {
        if (el.grad === grad && el.uspesanKurs()) {
            kolkoUspesnihKurseva++;
        }
    })
    return (kolkoKurseva == kolkoUspesnihKurseva);
}
console.log(`Da li navedeni grad kida?`, gradKida(kursevi, "Beograd"))

// Zadatak 8:
// Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan
// polaznik nije osvojio manje od 80% na završnom testu. 
// Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje 
// da li supolaznici  pokidali na tom kursu(funkcija vraća true ili false).
console.log("");
console.log("ZADATAK 8:")

let kursPokidao = (arr, kursIme) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].naziv === kursIme && arr[i].minimalnaOcena() >= 85) {
            return true;
        }
    }
    return false
}
console.log(`Navedeni kurs pokidao?`, kursPokidao(kursevi, "POKIDAN KURS - TEST"));

// GOTOVO :P


