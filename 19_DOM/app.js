console.log(document);
console.log(typeof document);
console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1)
console.log(typeof p1)

let cont = document.getElementsByClassName("container");
console.log(cont);
console.log(typeof cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

let contNiz = Array.from(cont);
contNiz.forEach(el => {
    console.log(el);
})

let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i])
}

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

p1 = document.querySelector("#p1")
console.log(p1);

cont = document.querySelector(".container");
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(el => {
    console.log(el);
})

paragrafi = document.querySelectorAll("p");
paragrafi.forEach(el => {
    console.log(el);
})

linkovi = document.querySelectorAll("[name = 'link']")
console.log(linkovi);

// VEZBANJE:

let errorDic = document.getElementsByClassName("error");
console.log(errorDic);
//////////////////////////////////////////
let poslednjiRow = document.querySelectorAll("tr")
console.log(poslednjiRow[poslednjiRow.length - 1])
///////////////////////////////////////////////////
let allLinks = document.querySelectorAll("a")
for (let i = 0; i < allLinks.length; i++) {
    console.log(allLinks[i])
};
//drugi nacin
let link = document.links;
console.log(link);
////////////////////////////////////////////
let allImg = document.querySelectorAll("img")
for (let i = 0; i < allImg.length; i++) {
    console.log(allImg[i])
};
//drugi nacin
let slike = document.images;
console.log(slike);

//////////////////////////

p1.innerHTML = "Promenjen text paragrafa"

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(el => {
    el.href = "https://www.google.com"
    el.target = "_blank"
    // blank salje link na nov prozor

    // CSS STILOVI
    el.style.color = "red";
    el.style.textDecoration = "none";

    // METODA
    el.setAttribute("name", "link2") // el.name = "XD"
    el.setAttribute("style", "color:blue")
})

// VEZBANJE

// Zadatak 1:
let allP = document.querySelectorAll("p");
allP.forEach(el => {
    el.innerHTML += "Vazno!"
})

// Zadatak 2:

let allErrorDivs = document.querySelectorAll("div.error")
allErrorDivs.forEach(el => {
    el.innerHTML += `<h1>GRESKA!</h1>`
})

// Zadatak 3: 

let sviparagrafi = document.querySelectorAll("p");

for (let i = 0; i < sviparagrafi.length; i++) {
    sviparagrafi[i].innerHTML += (i + 1) ** 2;
}

sviparagrafi.forEach((el, index) => {
    el.innerHTML += (index + 1) ** 2;
})

// Zadatak 4:

allImg.forEach(el => {
    el.setAttribute("alt", "123")
})

// Zadatak 5:

sviparagrafi.forEach(el => {
    el.setAttribute("style", "color: purple");
})

// Zadatak 6:

for (let i = 0; i < sviparagrafi.length; i++) {
    if (i % 2 == 0) {
        sviparagrafi[i].style.backgroundColor = "green";
    } else {
        sviparagrafi[i].style.backgroundColor = "red";
    }
}

// Zadatak 7:

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.padding = "5px";
    allLinks[i].style.fontSize = "18px";
    allLinks[i].style.textDecoration = "none";
    if (i % 2 == 0) {
        allLinks[i].style.backgroundColor = "green"
        allLinks[i].style.color = "purple"
    } else {
        allLinks[i].style.backgroundColor = "blue"
        allLinks[i].style.color = "white"
    }
}

// Zadatak 8:

allImg.forEach(el => {
    if (el.src.slice(-3) === "png") {
        el.style.border = "2px solid red"
    }
})

// Zadatak 9:

allLinks.forEach(el => {
    if (el.target == "_blank") {
        el.target = "_top";
    } else {
        el.target = "_blank";
    }
})

// Zadatak 10:

let arr = ["Miljan", "Sladjan", "Dragan", "Keko", "Meko", "Superman"];

// 1:
let newLink = "<section>"
let someCssStyles = `style="margin: 10px"`;
for (let i = 0; i < arr.length; i++) {
    // MOZE .startsWith("S");
    // arr[i][0] == "S"
    if (arr[i].indexOf("S") == 0) {
        newLink += `<a ${someCssStyles} href="https://www.google.com" target = "_blank">${arr[i]}</a>`
    } else {
        newLink += `<a ${someCssStyles} href="https://www.google.com">${arr[i]}</a>`
    }
}
newLink += `</section>`
document.body.innerHTML += newLink;

// 2:
let listaZadatak = `<ul>`
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        listaZadatak += `<li style="color:orange">${arr[i]}</li>`
    } else {
        listaZadatak += `<li style="color:purple">${arr[i]}</li>`
    }
}
listaZadatak += `</ul>`;
document.body.innerHTML += listaZadatak;

// 3:
let tabelaZadatak = `<table><tr>`; // u jednoj koloni?
for (let i = 0; i < arr.length; i++) {
    tabelaZadatak += `<td style="padding: 20px; border: 4px solid black; margin:10px">${arr[i]}</td>`
}
tabelaZadatak += `</tr></table>`
document.body.innerHTML += tabelaZadatak;

let testdiv = document.querySelector(".test")
// VEZBANJE 3 :

// Zadatak 1 :

for (let i = 0; i < sviparagrafi.length; i++) {
    if (i % 2 == 0) {
        sviparagrafi[i].classList.add("error")
    } else {
        sviparagrafi[i].classList.add("success")
    }
}

// Zadatak 2:

// Zadatak 3:

for (let i = 0; i < sviparagrafi.length; i++) {
    if (sviparagrafi[i].innerText.includes("success")) {
        sviparagrafi[i].classList.add("success")
    } else if (sviparagrafi[i].innerText.includes("error")) {
        sviparagrafi[i].classList.add("error")
    }
}




