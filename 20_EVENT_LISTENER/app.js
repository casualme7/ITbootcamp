let pKlikni = document.getElementById("klikni");
pKlikni.addEventListener("click", function () {
    console.log("Jednom kliknuto na paragraf");
})

let pdvaKlika = document.getElementById("dvaKlika");
pdvaKlika.addEventListener("dblclick", function () {
    console.log("Dvojklik na paragraf");
})

let btnPlus = document.getElementById("plus");
let sRes = document.getElementById("res");

let brojac = 0;
btnPlus.addEventListener("click", function () {
    brojac++
    sRes.innerText = brojac;
})

let btnMinus = document.getElementById("minus");
btnMinus.addEventListener("click", function () {
    brojac--;
    sRes.innerText = brojac;
})

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    pHelloIspis.innerText + `Hello ${inputIme.value}`
});