let blog1 = {
    title: "Amadeus",
    likes: 50,
    dislakes: 9,
};

let blog2 = {
    title: "Lion King!",
    likes: 50,
    dislakes: 12
};

let blog3 = {
    title: "Parasite",
    likes: 61,
    dislakes: 39
};

let blog4 = {
    title: "Uvod u JS",
    likes: 4,
    dislakes: 61
};

let blog5 = {
    title: "IF grananje",
    likes: 60,
    dislakes: 4
};

let user = {
    username: "Miljan Pantovic",
    godine: "26",
    blogs: [blog1, blog2, blog3],
    myLikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        })
        return s;
    }
}

let user2 = {
    username: "Neko Tamo",
    godine: "31",
    blogs: [blog4, blog5],
    myLikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        })
        return s;
    }
}

// Korisnik 1 username:
console.log(user.username);

// Podaci o prvom blogu korisnika 1:
console.log(user.blogs[0]);

// Naslov prvog bloga korisnika 1:
console.log(user.blogs[0].title);

// ZADATAK 1:
// Jos jedan array korisnika LOL
let korisnikArr = [user, user2];

// Ko su autori blogova?
korisnikArr.forEach(el => {
    console.log(el.username);
});

// Ispisati sve naslove blogova koje su napisali autori iz niza
korisnikArr.forEach(el => {
    let blogoviUser = el.blogs; // svi blogovi tekuceg korisnika
    blogoviUser.forEach(r => {
        console.log(r.title);
    });
});

// ZADATAK 2:
// Ispisati imena onih autora koji imaju ispod 30 godina.

korisnikArr.forEach(el => {
    if (el.godine < 30) {
        console.log(el.username);
    };
});

// ZADATAK 3:
//Ispisati naslove onih blogova koji imaju više od 50 lajkova

korisnikArr.forEach(el => {
    el.blogs.forEach(b => {
        if (b.likes > 50) {
            console.log(`Naslovi sa vise od 50 lajkova:`, b.title)
        }
    });
});

// ZADATAK 4:
// Ispisati sve blogove autora čiji je username ’Miljan Pantovic’
console.log("")
console.log("------ ZADATAK 4 ------")

korisnikArr.forEach(el => {
    if (el.username === "Miljan Pantovic") {
        console.log(`Svi blogovi Korisnika "Miljan Pantovic" `)
        let brojac = 0; // dodao sam brojeve da izgleda lepse.
        el.blogs.forEach(u => {
            brojac++ // Da numerise sve blogove.
            console.log(brojac, u.title)
        })
    }
})

// ZADATAK 5:
// spisati imena onih autora koji imaju ukupno 
// više od 200 lajkova za blogove koje su napisali
console.log("")
console.log("------ ZADATAK 5 ------")

korisnikArr.forEach(el => {
    let kolko = 0;
    el.blogs.forEach(u => {
        kolko += u.likes
    })
    if (kolko > 200) {
        console.log(`Prvi nacin: `, el.username, ", Lajkova:", kolko);
    }
})

// ZADATAK 5: drugi nacin
korisnikArr.forEach(el => {
    if (el.myLikes() > 200) {
        console.log(`Drugi nacin: `, el.username);
    }
})

// ZADATAK 6:
// Ispisati naslove onih 
// blogova koji imaju natprosečan broj pozitivnih ocena
console.log("")
console.log("------ ZADATAK 6 ------")

let globalAvgLikes = arr => {
    let globalSum = 0;
    let globalBr = 0;
    arr.forEach(el => {
        globalSum += el.myLikes();
        globalBr += el.blogs.length;
    })
    return globalSum / globalBr
}
console.log("Globalni prosek lajkova je:", globalAvgLikes(korisnikArr))

let blogoviSaNatprosecnoLajkova = arr => {
    let gal = globalAvgLikes(arr);
    arr.forEach(el => {
        console.log(`Username: `,el.username)
        let brojac = 0;
        el.blogs.forEach(b => {
            if (b.likes > gal) {
                brojac++
                console.log(brojac,b.title)
            }
        })
    })
}
console.log("Ispis naslova blogova sa naprosecnim brojem lajkova")
blogoviSaNatprosecnoLajkova(korisnikArr);