// let allLis = document.querySelectorAll("li")
// let selector = () => {
//     allLis = document.querySelectorAll("li")
//     allLis.forEach(el => {
//         el.addEventListener("click", () => {
//             el.remove()
//         })
//     })
// }
// selector();

// Funkcija da kolorizuje dugme u odnosu na to da li je 
// dobar ili los unos
let colorize = (b, c, bc, tx) => {
    dodajButton.style.border = b
    dodajButton.style.color = c
    dodajButton.style.backgroundColor = bc
    dodajButton.innerText = tx
}

// Deklarisanje varijabli
let containter = document.querySelector(".containter");
let ulSection = document.querySelector(".ulSection");
let unesiObavezu = document.querySelector(".unesiObavezu");
let dodajButton = document.querySelector(".dodajButton");
let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let errorMsg = document.querySelector(".errorMsg");

// Dugmence 
let dodato = true;
dodajButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newP = document.createElement("p");
    newP.innerText = "Polje ne sme biti prazno!";
    newP.style.color = "red";
    if (unesiObavezu.value.length > 0) {
        let newLi = document.createElement("li");
        newLi.innerText = unesiObavezu.value;
        unesiObavezu.style.border = "3px solid black";
        if (radio2.checked) {
            ulSection.appendChild(newLi);
        } else {
            ulSection.prepend(newLi);
        }
        unesiObavezu.value = "";
        unesiObavezu.placeholder = "Unesite obavezu";
        if (!dodato) {
            errorMsg.removeChild(errorMsg.lastChild);
        }
        dodato = true;
        // selector(); // Moj nacin za updateovanje li-a
        colorize("5px solid lime", "lime", "green", "Dodaj")
    } else {
        unesiObavezu.value = "";
        unesiObavezu.placeholder = "Netacan Unos";
        unesiObavezu.style.border = "3px solid red";
        if (dodato) {
            errorMsg.appendChild(newP);
        }
        dodato = false;
        colorize("5px solid red", "red", "rgb(73, 5, 5)", "Greska!");
    }
});

// JELENIN NACIN DA SE SKLONE SVI ELEMENTI
ulSection.addEventListener("click", (r) => {
    if (r.target.tagName == "LI") {
        r.target.remove();
    }
})
