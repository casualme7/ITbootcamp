console.log("----- OBJEKTI -----");

let blog = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Miljan Pantovic"
};

console.log(blog);
console.log(typeof blog);

console.log(blog.title);      // 1. nacin
console.log(blog['title']);   // 2. nacin

// Izmene propertija
// 2 nacina
blog.title = "Osnove HTML-a";
console.log(blog);
blog['author'] = "Mijlan P."
console.log(blog);

let user = {
    username: "vulture",
    age: 27,
    scores: [7, 8, 8, 10, 9],
    blogs: ["IF naredba grananja", "WHILE petlja", "FOR Petlja"],
    login: function () {
        console.log("Ulogovani ste!");
    },
    logout: function () {
        console.log("Izlogovani ste :(");
    },
    logBlogs: function () {
        console.log(this.blogs); // ispisuje properi blog, sve ispisuje.
        console.log(this); // izbacije objekat user
        this.blogs.forEach(el => {
            console.log(el); // ispisuje propertije blogova 1 po 1.
        })
    }
};

// kada je f-ja u objektu to se zove metod!

console.log(user);
console.log(user.blogs);
let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`
}

for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h4>${user.scores[i]}</h4>`
}

// Poziv Metoda.
user.login();
user.login();
user.logout();

// Poziv metoda koji u sebi sadrzi poziv nekog propetrija
user.logBlogs()

// Poziva window element , this.
console.log(this);

let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [2, 3, 4, 3, 2, 2, 3, 2, 1, 4, 4],
    prosecnaTemp: function () {
        let add = 0
        let prosek = 0;
        this.vrednostiTemperature.forEach(el => {
            add += el;
        })
        prosek = add / this.vrednostiTemperature.length;
        return prosek;
    },
    nadprosecnaTemp: function () {
        // OVAKO POZIVAMO PREDNOST PROSLE FUNKCIJE!!!
        let xx = this.prosecnaTemp();
        let iznadProseka = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el > xx) {
                iznadProseka++
            }
        })
        return iznadProseka;
    },
    maxTemp: function () {
        let brojac = 0;
        let max = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(el => {
            if (el > max) {
                max = el;
            }
        })
        this.vrednostiTemperature.forEach(el => {
            if (el == max) {
                brojac++
            }
        })
        return brojac;
    },
    izmedjuTemp: function (x, y) {
        let brojac2 = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el > x && el < y) {
                brojac2++
            }
        })
        return brojac2;
    },
    vecainaDanaIznadProseka: function () {
        let add = 0
        let prosek = 0;
        this.vrednostiTemperature.forEach(el => {
            add += el;
        })
        prosek = add / this.vrednostiTemperature.length;
        let prosekMerenja = this.vrednostiTemperature.length / 2;
        let brojac3 = 0;
        let resenje;
        this.vrednostiTemperature.forEach(el => {
            if (el > prosek) {
                brojac3++

            }
        })
        if (brojac3 > prosekMerenja) {
            resenje = true;
        } else {
            resenje = false;
        }
        return resenje;
    },
    ledenDan: function () {
        let ledeno = 0
        let resenje;
        this.vrednostiTemperature.forEach(el => {
            if (el > 0) {
                ledeno++
            }
        })
        if (ledeno == 0) {
            resenje = true;
        } else {
            resenje = false
        }
        return resenje;
    },
    tropskiDan: function () {
        let tropskiDan = 0
        let resenje;
        this.vrednostiTemperature.forEach(el => {
            if (el < 24) {
                tropskiDan++;
            }
        })
        if (tropskiDan == 0) {
            resenje = true;
        } else {
            resenje = false;
        }
        return resenje;
    },
    nepovoljanDan: function () {
        let trenutnoMerenje = this.vrednostiTemperature[0];
        let brojac = 0;
        let kraj;
        this.vrednostiTemperature.forEach(el => {
            if (el >= trenutnoMerenje) {
                if (el - trenutnoMerenje > 8) {
                    brojac++
                } else {
                    if (trenutnoMerenje - el > 8) {
                        brojac++;
                    }
                }
            }
            trenutnoMerenje = el;
            if (brojac > 0) {
                kraj = true
            } else {
                kraj = false
            }
        })
        return kraj;
        // Radi ali mnogo zguzvano, ispraviti!
    },
    neoubicajenDan: function () {
        let neoubicajen;
        let minimalnaUopste = this.vrednostiTemperature[0];
        let maximalnaUopste = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(el => {
            if (el < minimalnaUopste) {
                minimalnaUopste = el
            }
        })
        this.vrednostiTemperature.forEach(el => {
            if (el > maximalnaUopste) {
                maximalnaUopste = el
            }
        });
        if (this.kisa == true && minimalnaUopste <= -5) {
            neoubicajen = true;
        } else if (this.oblacno == true && maximalnaUopste >= 25) {
            neoubicajen = true;
        } else if (this.kisa == true && this.oblacno == true && this.sunce == true) {
            neoubicajen = true;
        } else {
            neoubicajen = false;
        }
    }
};

console.log(`Prosecna Temp:`, dan.prosecnaTemp());
console.log(`Nadprosecna Temp:`, dan.nadprosecnaTemp());
console.log(`Max Temp:`, dan.maxTemp());
console.log(`Izmedju Temp:`, dan.izmedjuTemp(2, 4));
console.log(`Vezina iznad proseka:`, dan.vecainaDanaIznadProseka());
console.log(`Ledeni Dan:`, dan.ledenDan());
console.log(`Tropski Dan:`, dan.tropskiDan());
console.log(`Nepovoljan Dan:`, dan.nepovoljanDan());
console.log(`Neoubicajen Dan:`, dan.neoubicajenDan());

/////////////////////////////////////////////////////////////