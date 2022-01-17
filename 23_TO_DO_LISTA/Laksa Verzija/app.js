let allLis = document.querySelectorAll("li")

allLis.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.textDecoration === "line-through solid red") {
            el.style.textDecoration = "none";
            // Da se otprecrta ako je vec precrtano
        } else {
            el.style.textDecoration = "line-through solid red";
            // Da se precrta ako nije vec precrtano
        }
    })
})