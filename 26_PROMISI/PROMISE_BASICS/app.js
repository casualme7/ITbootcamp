let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        resolve("Nesto je resolved");
        reject("Nije proslo LOL")
    });
    return obj;
}

// Ako je promise vratio resolve onda se realizuje
// .then() grana, a ako je resolve vratio reject onda
// se gleda catch() grana.
getSomething().then(data => {
    console.log(`Then() Grana:`, data);
}).catch(err => {
    console.log(`Cathch() grana`, err);
});