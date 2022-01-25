let getAPI = resourse => {
    // 1. Krairati XML Obj
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resourse);

    // 3. Saljemo Zahtev 
    request.send();

    // MORA I OVO:
    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let JSjson = JSON.parse(request.responseText);
                resolve(JSjson);
            } else if (request.readyState === 4) {
                reject("ERROR IN PROMISE")
            }
        });
    });
}

getAPI("https://jsonplaceholder.typicode.com/comments").then(data => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("content");
    data.forEach(el => {
        let newP = document.createElement("p")
        newP.innerText = `${el.id}) ${el.email}`;
        newDiv.appendChild(newP);
        document.body.appendChild(newDiv);
    })
}).catch(err => {
    let newDiv2 = document.createElement("div")
    newDiv2.classList.add("error");
    newDiv2.innerText = `CATCH ERROR: ${err}`;
    document.body.appendChild(newDiv2);
});

// Sada isto samo CHAIN-ujemo promise i razlicite API-eve

getAPI("https://jsonplaceholder.typicode.com/todos").then(data => {
    console.log(data);
    return getAPI("https://jsonplaceholder.typicode.com/users")
}).then(data => {
    console.log(data);
    return getAPI("https://jsonplaceholder.typicode.com/albums")
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log("Error found:", err);
});

/////////////

let treciPokusaj = url => {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText))
            } else if (request.readyState === 4) {
                reject("Something aint right here")
            }
        })
    })
}

// treciPokusaj("https://jsonplaceholder.typicode.com/posts")
//     .then(data => {
//         console.log(data);
//         return treciPokusaj("https://jsonplaceholder.typicode.com/comments")
//     }).then(data => {
//         console.log(data);
//         return treciPokusaj("https://jsonplaceholder.typicode.com/albums")
//     }).then(data => {
//         console.log(data);
//         return treciPokusaj("https://jsonplaceholder.typicode.com/photos")
//     }).then(data => {
//         console.log(data);
//         return treciPokusaj("https://jsonplaceholder.typicode.com/todos")
//     }).then(data => {
//         console.log(data);
//         return treciPokusaj("https://jsonplaceholder.typicode.com/users")
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log("Error", err);
//     })