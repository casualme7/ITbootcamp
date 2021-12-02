let pol = "m";
let god = 27;

// PRIORITET:
// 1. Negacija
// 2. AND &&
// 3. OR ||

if (pol == "m" && god >= 18) {
    console.log("Osoba je Muskog pola i punoletna je");
} else if (pol == "m" && god < 18 && god >= 0) {
    console.log("Osoba je Muskog pola i maloletna je");
} else if (pol == "z" && god >= 18) {
    console.log("Osoba je Zenskog pola i punoletna je");
} else if (pol == "z" && god < 18 && god >= 0) {
    console.log("Osoba je Muskog pola i maloletna je");
} else {
    console.log("ERROR");
}

if (pol == "Z" || pol == "z" || pol == "Ž" || pol == "ž") {
    document.body.innerHTML = "<img src='Slikice/z.png'>"
} else if (pol == "m" || pol == "M") {
    document.body.innerHTML = "<img src='Slikice/m.png'>"
} else {
    document.body.innerHTML = "<p>Pogresan Unos</p>"
}

pol = "z";
god = 15;

if ((pol == "Z" || pol == "z" || pol == "Ž" || pol == "ž") || god >= 18) {
    console.log("Osoba je zenskog pola i punoletna je");
} else if ((pol == "Z" || pol == "z" || pol == "Ž" || pol == "ž") && god >= 0 && god < 18) {
    console.log("Osoba je zenskog pola i maloletna je");
} else if ((pol == m || pol == "M") && god >= 18) {
    console.log("Osoba je muskog pola i punoletna je");
} else if ((pol == m || pol == "M") && god > 0 && god <= 18) {
    console.log("Osoba je muskog pola i maloletna je");
} else {
    console.log("Pogresan Unos");
}