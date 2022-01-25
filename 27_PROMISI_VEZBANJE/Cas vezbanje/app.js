let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

let getJSON = url => {
    let resource = new XMLHttpRequest();
    resource.open("GET", url);
    resource.send();
    return new Promise((resolve, reject) => {
        resource.addEventListener("readystatechange", () => {
            if (resource.readyState === 4 && resource.status === 200) {
                resolve(JSON.parse(resource.responseText));
            } else if (resource.readyState === 4) {
                reject("Can't FETCH data")
            }
        })
    })
}

let newP = document.createElement("p");
// Bacio sam ga iznad dugmeta da se ne bi stalno pravio element

function submitForm1(e) {
    e.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getJSON("./json/stock.json").then(data => {
        data.forEach(el => {
            if (el.stock <= 0) {
                ids.push(el.id);
            }
        })
        return getJSON("./json/weights.json")
    }).then(data => {
        let totalWeight = 0
        data.forEach(el => {
            if (ids.includes(el.id)) {
                totalWeight += el.weight;
            }
        })
        console.log(`Ukupna tezina proizvoda koji trebaju da se naruce je:`, totalWeight);
        if (totalWeight > capacity) {
            newP.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
            newP.style.color = "red";
            newP.style.fontSize = "25px";
            newP.style.fontWeight = "bold";
            divOrder.appendChild(newP);
        } else {
            return getJSON("./json/prices.json")
        }
    }).then(data => {
        if (data !== undefined) {
            let totalPrice = 0;
            data.forEach(el => {
                if (ids.includes(el.id)) {
                    totalPrice += el.price;
                }
            });
            newP.innerHTML = `Ukupna cena je: ${totalPrice} RSD`;
            newP.style.color = "green";
            newP.style.fontSize = "25px";
            newP.style.fontWeight = "bold";
            divOrder.appendChild(newP);
        }
    }).catch(err => {
        console.log("ERROR:", err);
    })
};

formOrder.addEventListener("submit", submitForm1);

// ZADATAK 2:

let divOrder2 = document.querySelector("#order2");
let formaDva = document.querySelector("#order2 form")
let textInput = document.querySelector("#textInput");
let numInput1 = document.querySelector("#numInput1");
let numInput2 = document.querySelector("#numInput2");

function submitForm2(ez) {
    ez.preventDefault();
    let inStock = [];
    let texticArr = [];
    let cenaArr = [];
    let textic = textInput.value;
    let broj1 = numInput1.value;
    let broj2 = numInput2.value;
    getJSON("./json/stock.json")
        .then(data => {
            data.forEach(el => {
                if (el.stock > 0) {
                    inStock.push(el);
                }
            })
            console.log(`Primer A) Na stanju:`, inStock);
            inStock.forEach(el => {
                if (el.item.includes(textic)) {
                    texticArr.push(el.id);
                }
            });
            console.log(`Primer B) sa unetim imenom:`, texticArr);
            return getJSON("./json/prices.json");
        }).then(data => {
            data.forEach(el => {
                if (texticArr.includes(el.id) && (el.price >= broj1 && el.price <= broj2)) {
                    cenaArr.push(el);
                }
            });
            console.log("Primer C) Cena izmedju vrednosti:", cenaArr);
            let lista = '<ol>';
            cenaArr.forEach(el => {
                lista += `<li>${el.item}</li>`
            });
            lista += `</ol>`;
            document.body.innerHTML += lista;
            console.log("Primer D) Lista sa itemima: U HTML-u");
            let tabela = `<table border="1">`;
            tabela += `<tr><th>Ime:</th><th>Stanje:</th><th>Cena:</th></tr>`;
            cenaArr.forEach(el => {
                tabela += `<tr>`
                tabela += `<td>${el.item}</td>`;
                tabela += `<td>${el.stock}</td>`;
                tabela += `<td>${el.price} rsd</td>`;
                tabela += `</tr>`;
            });
            tabela += `</table>`;
            document.body.innerHTML += tabela;
            console.log("Primer D) Tabela sa itemima: U HTML-u");
        });
};

formaDva.addEventListener("submit", submitForm2);