// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 1) {
//         console.log("Uspostavljena konekcija");
//     } else if (request.readyState === 2) {
//         console.log("Poslat je zahtev serveru");
//     } else if (request.readyState === 3) {
//         console.log("Prihvata se odgovor - u statusu preuzimanja");
//     } else if (request.readyState === 4) {
//         console.log("Odgovor je preuzet:", request.responseText);
//     }
// })

// arrow = Window element;
// anonmna, ono sto poziva, u ovom slucaju dugme, treba this

// request.addEventListener("readystatechange", function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//     } else if (this.readyState === 4) {
//         console.log("Could not fetch data");
//     }
// })

// request.open("GET", "https://jsonplaceholder.typicode.com/posts");
// request.send(); // ASINHRONO, kreira novi thread.

console.log("VEZBANJE:")
console.log("")
// VEZBANJE:

const vezbanje = new XMLHttpRequest();

vezbanje.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let dataz = JSON.parse(this.responseText);
        console.log("Zadatak 2:");
        let z2 = 1;
        dataz.forEach(el => {
            if (el.website.slice(-4) === ".com") {
                console.log(z2, el.website)
                z2++;
            }
        })
        console.log("");
        console.log("Zadatak 3:");
        let z3 = 1;
        dataz.forEach(el => {
            if (el.name.includes("Clementin")) {
                console.log(z3, el.name)
                z3++;
            }
        })
        console.log("");
        console.log("Zadatak 4:");
        let z1 = 1;
        dataz.forEach(el => {
            if (el.company.name.includes("Group") || el.company.name.includes("LLC")) {
                console.log(z1, el.name);
                z1++;
            }
        })
        console.log("");
        console.log("Zadatak 5:");
        let z5 = 1;
        let arrOfCities = [];
        dataz.forEach(el => {
            if (!arrOfCities.includes(el.address.city)) {
                arrOfCities.push(el.address.city);
            }
        })
        arrOfCities.forEach(el => {
            console.log(z5, el)
            z5++;
        })
        console.log("");
        console.log("Zadatak 6:");
        let z6 = 1;
        dataz.forEach(el => {
            if (el.address.geo.lat < 0 && el.address.geo.lng < 0) {
                let x = parseFloat(el.address.geo.lat);
                let y = parseFloat(el.address.geo.lng);
                console.log(z6, el.name, `: ${x.toFixed(2)} - ${y.toFixed(2)}`);
                z6++
                // Zasto nece .toFixed na ove parametre x i y , skontati.
                // KAKO SAM GLUP, PA TO JE STING, MORAM DA GA PARSE INT...
            }
        })
    } else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
})

vezbanje.open("GET", "https://jsonplaceholder.typicode.com/users");
vezbanje.send();

// Jedna callback funkcija za sve requestove!
// One to rule them all. AXIOS? Sta je to bese

let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            // radi nesto kaad je sve uredu.
            let data = JSON.parse(this.responseText);
            resolve(data);
        } else if (this.readyState === 4) {
            // radi nesto kada je doslo do greske
            reject("DOSLO JE DO GRESKE")
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
}

let zad2 = arr => {
    arr.forEach(el => {
        if (el.website.includes(".com")) {
            console.log(el.name);
        }
    })
    console.log("");
};

let zad3 = arr => {
    arr.forEach(el => {
        if (el.name.includes("Clementin")) {
            console.log(el.name);
        }
    })
    console.log("");
};

let zad4 = arr => {
    let arrOfCities = [];
    arr.forEach(el => {
        if (!arrOfCities.includes(el.address.city)) {
            arrOfCities.push(el.address.city);
        }
    })
    arrOfCities.forEach(el => {
        console.log(el)
    });
    console.log("");
};

let ispisPorukaStranica = poruka => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`
}

let ispisPorukaKonzola = poruka => {
    console.log(poruka);
}

getUsers(zad2, ispisPorukaStranica);
getUsers(zad3, ispisPorukaStranica);
getUsers(zad4, ispisPorukaStranica);

// NEKI TRECI NACIN

getUsers(
    (arr) => {
        arr.forEach(el => {
            if (el.company.name.includes("Group") || el.company.name.includes("LLC")) {
                console.log(el.name)
            }
        });
    },
    (poruka) => {
        document.body.innerHTML += `<p class="error">${poruka}</p>`
    }
);

// VEZBANJE 2:

let getUsersZad2 = (resolve, reject) => {
    let request2 = new XMLHttpRequest();
    request2.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            // radi nesto kaad je sve uredu.
            let data = JSON.parse(this.responseText);
            resolve(data);
        } else if (this.readyState === 4) {
            // radi nesto kada je doslo do greske
            reject("DOSLO JE DO GRESKE")
        }
    });
    request2.open("GET", "./SPORTISTI.json");
    request2.send();
}

let newZad1 = arr => {
    let sum = 0;
    arr.forEach(el => {
        sum += el.visina
    })
    let resenje = (sum / arr.length).toFixed(2)
    console.log(resenje, "cm");
};
getUsersZad2(newZad1)

let newZad2 = arr => {
    let minT = arr[0];
    arr.forEach(el => {
        if (el.timovi.length < minT.timovi.length) {
            minT = el
        }
    })
    console.log(minT.imePrezime)
}
getUsersZad2(newZad2);

let newZad3 = (arr) => {
    arr.forEach(el => {
        if (el.timovi.includes("Lakers")) {
            console.log(el.imePrezime);
        }
    })
}
getUsersZad2(newZad3);