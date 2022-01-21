let getTodos = (resourse, callback) => {
    // 1. Krairati XML Obj
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            // Sve je OK
            let data = JSON.parse(request.responseText);
            // console.log(data);
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        } else if (request.readyState === 4) {
            // Nesto nije UREDU
            // console.log("Can't FETCH data");
            callback(undefined, "Can't FETCH data");
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resourse);

    // 3. Saljemo Zahtev 
    request.send();

}

getTodos("../JSON/todos.json", (data, err) => {
    console.log("CallBack Triggered");
    // Ako je err = true ispisuje err, u suprotnom ispisuje data
    if (err) {
        console.log(err); 
    } else {
        console.log(data);
        getTodos("../JSON/fruits.json", (data, err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                getTodos("../JSON/vegetables.json", (data, err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                })
            }
        })
    }
});

console.log("KRAJ");


