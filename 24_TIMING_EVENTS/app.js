console.log("1");
console.log("2");

setTimeout(() => {
    console.log("3");
}, 1000 / 2);

setTimeout(function () {
    console.log("4")
}, 1000 * 1.5);

function ispis() {
    console.log("5");
}

setTimeout(() => {
    ispis()
}, 1000 * 1);

// arrow = Window element;
// anonmna, ono sto poziva, u ovom slucaju dugme

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let inp1 = document.querySelector("#inp1");
let sel1 = document.querySelector("#sel1");
let ispisx = document.querySelector(".ispisx");

btn1.addEventListener("click", function () {
    setTimeout(() => {
        if (inp1.value.length === 0) {
            console.log("ERROR");
        } else {
            console.log(inp1.value);
        }
    }, parseInt(sel1.value))
    // console.log(this);
});

//////////////////NASTAVAK////////////////////////

btn2.addEventListener("click", function () {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    setTimeout(() => {
        ispisx.innerHTML = `Vreme: ${sati}:${minuti}:${sekunde}`
    }, 500);
})

///////////////ZADATAK1///////////////////////

let clockDiv = document.querySelector(".clockDiv");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
btn4.disabled = true;
let interval2;

btn3.addEventListener("click", () => {
    btn3.disabled = true;
    btn4.disabled = false;
    interval2 = setInterval(() => {
        let datum = new Date();
        let sati = datum.getHours();
        let minuti = datum.getMinutes();
        let sekunde = datum.getSeconds();
        clockDiv.innerText = `Vreme: ${sati}:${minuti}:${sekunde}`;
    }, 1000)
});

btn4.addEventListener("click", () => {
    btn3.disabled = false;
    btn4.disabled = true;
    clearInterval(interval2);
    clockDiv.innerText = "";
});

///////////////ZADATAK2///////////////////////

let start1 = document.querySelector(".start1");
let input2 = document.querySelector(".input2");
let stop1 = document.querySelector(".stop1");

let intervalX;
let cooldownStarted = false;
start1.addEventListener("click", () => {
    let brojac = 1;
    if (!cooldownStarted) {
        cooldownStarted = true;
        intervalX = setInterval(() => {
            input2.value = brojac;
            brojac++
        }, 1000)
    }
});

stop1.addEventListener("click", () => {
    clearTimeout(intervalX);
    cooldownStarted = false;
    input2.value = "";
});
