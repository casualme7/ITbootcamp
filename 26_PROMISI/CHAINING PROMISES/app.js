let getTodos = resourse => {
    // 1. Krairati XML Obj
    let request = new XMLHttpRequest();
    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resourse);

    // 3. Saljemo Zahtev 
    request.send();

    // Moze i return new Promise() i ispod onda ne treba return p
    let p = new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                // Sve je OK
                let data = JSON.parse(request.responseText);
                // console.log(data);
                // console.log(request.responseText);
                // callback(request.responseText, undefined);
                resolve(request.responseText)
            } else if (request.readyState === 4) {
                // Nesto nije UREDU
                // console.log("Can't FETCH data");
                // callback(undefined, "Can't FETCH data");
                reject("Can't FETCH data")
            }
        });
    });
    return p; // Vraca se objekat promise
    // ako gore isporistimo return new Promise ovo p je nepotrebno
}
// Zelim prvo da se ucita todos.json falj, 
// 2. fruits i 
// 3. vegetables

getTodos("../JSON/todos.json").then(data => {
    console.log("Promise resolved", data);
    return getTodos("../JSON/fruits.json");
}).then(data => {
    console.log("Promise resolved", data);
    return getTodos("../JSON/vegetables.json");
}).then(data => {
    console.log("Promise resolved", data);
}).catch(err => {
    console.log("Promise Rejected:", err);
})

console.log("KRAJ");

// CAK I kada pogresim on ispisuje  liniju 24?


