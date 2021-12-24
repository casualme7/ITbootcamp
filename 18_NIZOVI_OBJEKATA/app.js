console.log("NIZOVI OBJEKATA");

let blog1 = {
    title: "Amadeus",
    likes: 30,
    dislakes: 9,
};

let blog2 = {
    title: "Lion King!",
    likes: 40,
    dislakes: 12
};

let blog3 = {
    title: "Parasite",
    likes: 15,
    dislakes: 39
};

let arrBlog = [blog1, blog2, blog3];
arrBlog.forEach(objekat => {
    console.log(objekat);
})

arrBlog.forEach(objekat => {
    document.body.innerHTML += `<h3>${objekat.title}</h3>`
    document.body.innerHTML += `<p>Likes: ${objekat.likes}</p>`
    document.body.innerHTML += `<p>Dislikes: ${objekat.dislakes}</p>`
})

for (let i = 0; i < arrBlog.length; i++) {
    console.log(arrBlog[i].title);
}

// Promena vrednosti Elementa.

blog3.title = "Avengers: Endgame";
console.log(blog3.title)

arrBlog[2].title = "Evengers: Inf War"
console.log(arrBlog[2].title)

// VEZBANJE: 
console.log(`----- VEZBANJE -----`)

// ZADATAK 1:
// Napraviti arrow funkciju kojoj se prosleđuje 
// niz objekata, a ona vraća ukupan broj lajkova

//Nacin 1:
let likeAmount = arr => {
    let total = 0;
    arr.forEach(el => {
        total += el.likes
    })
    return total;
}
console.log(`Ukupan broj lajkova nacin #1:`, likeAmount(arrBlog));

//Nacin 2:
let likeAmount2 = arr => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].likes;
    }
    return total;
}
console.log(`Ukupan broj lajkova nacin #2:`, likeAmount2(arrBlog));

// ZADATAK 2:
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
// a ona vraća prosečan broj lajkova

let avgLikeAmount = arr => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].likes;
    }
    return total / arr.length;
}
console.log(`Prosecan br lajkova: `, avgLikeAmount(arrBlog).toFixed(2));
console.log(`Rounded Prosecan br lajkova: `, Math.round(avgLikeAmount(arrBlog)));

// ZADATAK 3:
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
// a ona ispisuje sve one naslove blogova koji imaju više 
// pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(el => {
        if (el.likes > el.dislakes) {
            console.log(el.title);
        }
    });
}
console.log(`Titles with more likes than dislikes:`);
moreLikes(arrBlog);

// ZADATAK 4:
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, 
// a ona ispisuje sve one naslove blogova koji imaju najmanje 
// duplo više pozitivnih nego negativnih ocena

let doubleTheLikes = arr => {
    arr.forEach(el => {
        if (el.likes >= (el.dislakes * 2)) {
            console.log(el.title);
        }
    });
}
console.log(`Titles with double more likes than dislikes:`);
doubleTheLikes(arrBlog)

// ZADATAK 5:
// Napisati arrow funkciju kojoj se prosleđuje niz objekata
// a ona ispisuje sve naslove koji se završavaju uzvičnikom

let exclamationMark = arr => {
    arr.forEach(el => {
        if (el.title.slice(-1) == "!") {
            //(el.title.endsWith("!")) drugi nacin
            console.log(`Titles that end with "!":`, el.title)
        }
    })
}
exclamationMark(arrBlog)

//////// KRAJ VEZBANJA ////////

