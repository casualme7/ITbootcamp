const redToggle = document.querySelector("#redToggle")
const rainbow = document.querySelector("#rainbow")
const centered = document.querySelector("#centered")

setInterval(function () {
    redToggle.classList.toggle("red");
}, 1000)

setInterval(function () {
    rainbow.classList.toggle("red");
}, 1000)

setInterval(function () {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let rainbowBorder = `rgb(${r},${g},${b})`;
    centered.style.border = `5px solid ${rainbowBorder}`;
    centered.style.transition = "5s"
}, 2000)

const doggyPic = document.querySelector("#doggyPic");
const catPic = document.querySelector("#catPic")

// Ovo rngLastPicked i rng2LastPicked mi sluze kako
// ne bi isti RNG broj bio dva puta za redom.

let rngLastPicked;
catPic.addEventListener("mouseenter", function () {
    let rng = Math.ceil(Math.random() * 10);
    if (rngLastPicked === rng) {
        rng = Math.ceil(Math.random() * 10);
    }
    rngLastPicked = rng;
    catPic.src = `Pictures/cat${rng}.jpg`
})

// Ovo rngLastPicked i rng2LastPicked mi sluze kako
// ne bi isti RNG broj bio dva puta za redom.

let rng2LastPicked;
doggyPic.addEventListener("mouseenter", function () {
    let rng2 = Math.ceil(Math.random() * 10);
    if (rng2LastPicked === rng2) {
        rng2 = Math.ceil(Math.random() * 10);
    }
    rng2LastPicked = rng2;
    doggyPic.src = `Pictures/dog${rng2}.jpg`
})

const backgroundButton1 = document.querySelector("#backgroundButton1")
const backgroundButton2 = document.querySelector("#backgroundButton2")
const backgroundButton3 = document.querySelector("#backgroundButton3")

backgroundButton1.addEventListener("click", function () {
    document.body.style.backgroundImage = "url(Pictures/sunset2.jpg)";
    backgroundButton1.classList.add("activeButton")
    backgroundButton2.classList.remove("activeButton")
    backgroundButton3.classList.remove("activeButton")
})

backgroundButton2.addEventListener("click", function () {
    document.body.style.backgroundImage = "url(Pictures/galaxy2.jpg)";
    backgroundButton2.classList.add("activeButton")
    backgroundButton1.classList.remove("activeButton")
    backgroundButton3.classList.remove("activeButton")
})

backgroundButton3.addEventListener("click", function () {
    document.body.style.backgroundImage = "url(Pictures/sunset.jpg)";
    backgroundButton3.classList.add("activeButton")
    backgroundButton1.classList.remove("activeButton")
    backgroundButton2.classList.remove("activeButton")
})

console.log("Trebalo mi je oko 3-4 sada da ovo napravim")
console.log("Ako je bilo ko proditao ovu poruku")
console.log("Svaka cast! :)")

const correctSound = new Audio("Sounds/correct.mp3")

const dugmence = document.querySelector("#dugmence");
const uradio = document.querySelector("#uradio");

dugmence.addEventListener("click", function () {
    dugmence.disabled = "true";
    dugmence.innerText = "Thanks!"
    const hr1 = document.createElement("hr")
    uradio.appendChild(hr1);
    setTimeout(function () {
        const p1 = document.createElement("p");
        p1.innerHTML = "Iskoristio tagove: &#60;html&#62; &#60;head&#62; &#60;title&#62; &#60;body&#62; &#60;p&#62; &#60;b&#62; &#60;i&#62; &#60;center&#62;";
        uradio.appendChild(p1);
        setTimeout(function () {
            p1.classList.add("green");
            p1.innerHTML = "Iskoristio tagove: &#60;html&#62; &#60;head&#62; &#60;title&#62; &#60;body&#62; &#60;p&#62; &#60;b&#62; &#60;i&#62; &#60;center&#62; &#x2705;";
            correctSound.play();
        }, 1500)
    }, 1500)
    setTimeout(function () {
        const p1 = document.createElement("p");
        p1.innerHTML = "Iskoristio tagove: &#60;br&#62; &#60;hr&#62; &#60;div&#62; &#60;span&#62; &#60;!--...--&#62; &#60;em&#62; &#60;header&#62;";
        uradio.appendChild(p1);
        setTimeout(function () {
            p1.classList.add("green");
            p1.innerHTML = "Iskoristio tagove: &#60;br&#62; &#60;hr&#62; &#60;div&#62; &#60;span&#62; &#60;!--...--&#62; &#60;em&#62; &#60;header&#62; &#x2705;";
            correctSound.play();
        }, 1500)
    }, 4500)
    setTimeout(function () {
        const p1 = document.createElement("p");
        p1.innerHTML = "Iskoristio dodatne tagove: &#60;ul&#62; &#60;ol&#62; &#60;li&#62; &#60;img&#62; &#60;button&#62; &#60;main&#62; &#60;a&#62;";
        uradio.appendChild(p1);
        setTimeout(function () {
            p1.classList.add("green");
            p1.innerHTML = "Iskoristio dodatne tagove: &#60;ul&#62; &#60;ol&#62; &#60;li&#62; &#60;img&#62; &#60;button&#62; &#60;main&#62; &#60;a&#62; &#x2705;";
            correctSound.play();
        }, 1500)
    }, 7500)
    setTimeout(function () {
        const p1 = document.createElement("p");
        p1.innerHTML = "Koristio CSS stilove sa predavanja 16.11.2021. godine.";
        uradio.appendChild(p1);
        setTimeout(function () {
            p1.classList.add("green");
            p1.innerHTML = "Koristio CSS stilove sa predavanja 16.11.2021. godine. &#x2705;";
            correctSound.play();
        }, 1500)
    }, 10500)
    setTimeout(function () {
        const p1 = document.createElement("p");
        p1.innerHTML = "Radio JavaScript kako bi Vam bilo zanimljivije da gledate moj rad";
        uradio.appendChild(p1);
        setTimeout(function () {
            p1.classList.add("green");
            p1.innerHTML = "Radio JavaScript kako bi Vam bilo zanimljivije da gledate moj rad &#x2705;";
            correctSound.play();
        }, 1500)
    }, 13500)
})