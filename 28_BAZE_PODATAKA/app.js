// db je objekat - Objekat cele baze.
console.log(db);

// pristupanje kolekciji
let customers = db.collection("customers");
console.log(customers);

// pristupanje dokumentu
let doc1 = customers.doc("customers1")
console.log(doc1);

let doc2 = db.collection("tasks").doc("task1")
console.log(doc2);

/*
Za pristup dokumentu:
db.collection("...").doc("...");
Dok Dokumenta imamo sledece operacije:

   CRUD (Create, Read, Update, Delete):

        Create  : doc.set(...)
        Read    : doc.get(...)
        Update  : doc.update(...)
        Delete  : doc.delete(...)

    Sve ove 4 operacije kao rezultat vracaju Promise
    Sto znaci: Nakon njih lancamo .then() i .catch();

*/

let obj = {
    name: "Vesna",
    age: 22,
    addresses: ["Nis", "Leskovac"],
    salary: 470.02
}

db.collection("customers").doc("customer4").set(obj)
    .then(() => {
        console.log(`Added New Document in "Customers" collection`);
        return db.collection("customers").doc("customer4").set(
            { height: 180 },
            { merge: true }
        )
    })
    .then(() => {
        console.log(`Spojen dokument "customers 4" u kolekciju "costomers"`);
    })
    .catch((err) => {
        console.log("Error occured:", err);
    });
/////////////////

let datum1 = new Date("2020-01-26 12:00:00");
let datum2 = new Date("2020-01-26 13:00:00");

let obj2 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz ITBootcamp-a"
}

db.collection("tasks").doc("task4").set(obj2).then(() => {
    console.log(`Uspesno dodat task: TASK 4`)
}).catch(err => {
    console.log(`Neuspesno dodat task: ${err}`)
})



// Update:

db.collection("tasks").doc("task2").update({
    priority: true
}).then(() => {
    console.log("Uspesno promenjeno polje u TASK2");
}).catch(err => {
    console.log(`Greska prilikom menjanja dokumenta: ${err}`);
})


// Delete

db.collection("tasks").doc("task4").delete().then(() => {
    console.log("Uspesno izbrisan dokument TASK4");
}).catch(err => {
    console.log(`Greska prilikom brisanja dokumenta: ${err}`);
})

// VEZBANJE:

let film2 = {
    name: "Avengers:Endgame",
    director: "Joe Russo",
    release: 2018,
    genres: ["Action", "Comedy"],
    rating: 9.1
}

let film3 = {
    name: "Treci Film",
    director: "LOL",
    release: 1951,
    genres: ["Romance", "Mystery", "Fantasy", "Drama", "Western"],
    rating: 2.1
}

// Dodaje filmove u bazu:
// 1 film:
db.collection("movies").doc("movie2").set(film2).then(() => {
    console.log("Movie 2 added successfully");
}).catch(err => {
    console.log("Movie not added:", err);
})

// 2 film:
db.collection("movies").doc("movie3").set(film3).then(() => {
    console.log("Movie 3 added successfully");
}).catch(err => {
    console.log("Movie not added:", err);
})

// Menja podatke o filmovima:
db.collection("movies").doc("movie1").update({ rating: 8.5 }).then(() => {
    console.log("Movie 1 rating successfully changed");
}).catch(err => {
    console.log("Error while modifying movie1 rating:", err);
})

// Dodaje zanr nekkom filmu:
db.collection("movies").doc("movie1").update({
    genres: firebase.firestore.FieldValue.arrayUnion("Horror")
}).then(() => {
    console.log(`Added "Horror" genre to movie1 doc`);
}).catch(err => {
    console.log("Error occured while adding new genre to movie1:", err);
})

// Brize zanr nekom filmu:
db.collection("movies").doc("movie2").update({
    genres: firebase.firestore.FieldValue.arrayRemove("Comedy")
}).then(() => {
    console.log(`Removed genre to movie2 doc`);
}).catch(err => {
    console.log("Error while removing genre to movie2:", err);
})

// Menja ime ili prezime nekom reziseru:
db.collection("movies").doc("movie2").update({
    director: "Russo Brothers"
}).then(() => {
    console.log("Changed director name of movie2");
}).catch(err => {
    console.log("Error while changins director name property:", err);
});

// Drugi nacin za dodavanja dokumenta:

db.collection("tasks").add({
    title: "Vezba za projekat",
    description: "Vezbanje JS",
    start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
    due_date: null,
    priority: true,
}).then(() => {
    console.log("Uspesno dodat zadatak u kolekciju Tasks");
}).catch(err => {
    console.log("Desila se greska:", err);
})

/*

db.collection("...").add()   <==> db.collection("...").doc().set()
    - Dodaje nov dokument sa random ID-em

db.collection("...").doc(id).set(id)
    Dodaje dokument sa ven unetim ID-jem

*/