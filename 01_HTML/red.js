const redGlowing = document.querySelector("#redGlowing")

let intervalX = setInterval(function () {
    redGlowing.classList.toggle("red")
}, 300)

redGlowing.addEventListener("mouseenter", function () {
    clearInterval(intervalX);
    redGlowing.classList.remove("red")
})