import { Film } from "./film.js";

////////////////////////////////////////
console.log("");
console.log("Vezbanje:");
console.log("");

let f1 = new Film("Endgame", "Anthony Russo", 1523, [8.2, 9.4, 6]);
// test za godinu manju od 1800;
console.log(f1)
f1.stampaj(); // stampanje za napravljenu metodu
let f2 = new Film("Inception", "Christopher Nolan", 2010, [5.8, 9, 9.1]);
console.log(f2)
f2.stampaj(); // stampanje za napravljenu metodu
let f3 = new Film("F9", "Justin Lin", 2021, [8.2, 9.4, 6]);
console.log(f3)
f3.stampaj(); // stampanje za napravljenu metodu

f1.naslov = "   Endgame"
f1.stampaj();
f2.reziser = ""
f2.stampaj();

f1.dodajOcenu(10); // dodali smo ocenu ovde.. Zamalo da zaboravim
f1.stampaj();

// Prikaz svih  filmova u tabelici
let tabelica = `<table border = 1> 
<tr>
<th>Naziv filma</th>
<th>Reziser</th>
<th>Godina izdanja</th>
<th>Ocene</th>
<th>Prosecne Ocene</th>
</tr>`

let filmovi = [f1, f2, f3];

filmovi.forEach(el => {
    tabelica +=
        `<tr> 
    <td>${el.naslov}</td>
    <td>${el.reziser}</td>
    <td>${el.godinaIzdanja}</td>
    <td>${el.ocene}</td>
    <td>${el.prosek().toFixed(2)}</td >
    </tr > `
});

tabelica += `</table > `;
document.body.innerHTML = tabelica;

console.log("")
console.log("Vezbanje drugi dan")
console.log("")

// Prosecna ocena filmova
filmovi.forEach(el => {
    console.log(`Prosek ocena Filma ${ el.naslov }: ${ el.prosek().toFixed(2) }`)
})

console.log("")
// vekFilmova , prosleddjen vek.
let vekFilmova = (arr, vek) => {
    let vekDG = (vek * 100) + 1;
    let vekGG = ((vek + 1) * 100) - 1;
    console.log(`Od`, vekDG, `do: `, vekGG)
    arr.forEach(el => {
        if (el.godinaIzdanja > vekDG && el.godinaIzdanja < vekGG) {
            console.log(el.naslov, "- Godina izdanja:", el.godinaIzdanja)
        }
    })
}
vekFilmova(filmovi, 20)

console.log("")
// Globalni prosek ocena filmova.
let globalProsek = arr => {
    let globalSum = 0
    let ukupnoOcena = 0;
    arr.forEach(el => {
        el.ocene.forEach(o => {
            ukupnoOcena++
            globalSum += o;
        })
    })
    return globalSum / ukupnoOcena;
}
console.log("Globalni prosek:", globalProsek(filmovi).toFixed(2));

console.log("")
let najboljeOcenjeni = arr => {
    let max = arr[0].prosek();
    let film = arr[0];
    arr.forEach(el => {
        if (el.prosek() > max) {
            max = el.prosek();
            film = el;
        }
    })
    return film;
}
console.log("Najbolje ocenjen film:", najboljeOcenjeni(filmovi).naslov, najboljeOcenjeni(filmovi).prosek())

console.log("")
let osrednjiFilm = arr => {
    let film = arr[0]
    let srednjaOcena = globalProsek(arr);
    let razlika = Number.MAX_SAFE_INTEGER;
    arr.forEach(el => {
        if (Math.abs(srednjaOcena - el.prosek()) < razlika) {
            razlika = Math.abs(srednjaOcena - el.prosek());
            film = el;
        }
    })
    return `Naziv: ${ film.naslov } - Razlika ${ razlika.toFixed(2) } `
}
console.log("Osrednji film:", osrednjiFilm(filmovi))

console.log("")
let najmanjaOcenaNajboljeg = arr => {
    let najbolji = najboljeOcenjeni(arr);
    let najmanjaOcena = najboljeOcenjeni(arr).ocene[0];
    najbolji.ocene.forEach(oc => {
        if (najmanjaOcena > oc) {
            najmanjaOcena = oc;
        }
    })
    return najmanjaOcena;
}
console.log("Najmanja ocena Najboljeg filma:", najmanjaOcenaNajboljeg(filmovi));

console.log("")
let najmanjaOcena = arr => {
    let minOcena = arr[0].ocene[0]
    arr.forEach(el => {
        el.ocene.forEach(o => {
            if (o < minOcena) {
                minOcena = o;
            }
        })
    })
    return minOcena;
}
console.log("Uopste namjanja ocena bilo kog filma", najmanjaOcena(filmovi))

console.log("");

// SVE OVO MOZE CONCAT DA SE URADI, TOP NACIN!
// let f = [];
// f = f.concat(filmovi[0].ocene, filmovi[1].ocene, filmovi[2].ocene)
// console.log(f)

let sveOcene = arr => {
    let arrSveOcene = [];
    arr.forEach(el => {
        arrSveOcene = arrSveOcene.concat(el.ocene)
    })
    return arrSveOcene;
}
console.log(sveOcene(filmovi));

// Sada ovde niz koji prosledjujemo je niz svih ocena iz sveOcene
// console.log("ZAVRSI OVAJ ZAD ZA OCENE, znas koji.")

console.log("");
let iznadOcene = (arr, ocenaX) => {
    let arrX = [];
    arr.forEach(el => {
        if (el.prosek() > ocenaX) {
            arrX.push(el)
        }
    })
    return arrX;
}
console.log("Film/ovi iznad odredjene ocene: ", iznadOcene(filmovi, 8))

console.log("")
let iznadOceneNoviji = (arr, ocenaX) => {
    let najnoviji = Number.MIN_SAFE_INTEGER;
    let filmic = "";
    console.log("Ispisao sam informaciej o filmovima cisto kao referenca:")
    arr.forEach(el => {
        console.log(el.naslov, el.godinaIzdanja, "-", el.prosek().toFixed(2))
        if (el.prosek() > ocenaX && el.godinaIzdanja > najnoviji) {
            najnoviji = el.godinaIzdanja;
            filmic = el;
        }
    })
    return filmic
}
console.log("Najnoviji film iznad unete ocene:", iznadOceneNoviji(filmovi, 7))
