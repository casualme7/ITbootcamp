// 1) Pristupanje konkretnom dokumentu:
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1)

db.collection("customers").doc("customer1").get().then((doc) => {
    if (doc.exists) {
        console.log("Postoji dokument:", doc.id);
        let obj = doc.data();
        console.log(obj);
    } else {
        console.log("Ne postoji dokument ciji je ID:", doc.id);
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 2

db.collection("customers").get().then((data) => {
    if (!data.empty) {
        let allDocs = data.docs;
        allDocs.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 1) Dohvatanje dokumenata u odredjenom redosledu
// 2) Dohvatanje odredjenog broja dokumenata
// 3) Dohvatanje dokumenata koji zadovoljavanu odredjene kriterijume (filtriranje)

// 1
// .orderBy("name / age / sta god")
// .orderBy("name", "desc")  -> descending unazad
// .orderBy("name", "asc")  -> ascending unazad

db.collection("customers").orderBy("age", "desc").orderBy("name").get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})


// 2
// .limit(2) -> Limitiramo kolko da se pokazu

db.collection("customers").orderBy("age", "desc").orderBy("name").limit(2).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 2. Primer - TEST - 

db.collection("customers").orderBy("age", "desc").orderBy("name", "asc").orderBy("salary", "desc").limit(2).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 3)

db.collection("customers").where("age", "<=", 23).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// VEZBANJE:

// 1:
db.collection("customers").where("addresses", "array-contains", "Nis").get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 2-3:

db.collection("customers").where("salary", ">=", 300).where("salary", "<=", 800).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 4:
db.collection("customers").where("salary", "<", 900).where("age", "==", 30).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 5:
// Any je da je bilo koji od ta dva
db.collection("customers").where("adresses", "array-contains-any", ["Nis", "Beograd"]).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})
// addresses sma ppogresio.. :D

// 6:
db.collection("customers").where("age", "in", [22, 25, 28]).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// VEZBANJE 2: (TASKS)

// 1:
db.collection("tasks").where("priority", "==", true).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(`${obj.title}`);
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 2:
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1); // 1. jan tekuce godine
let date2 = new Date(year + 1, 0, 1); // 1. jan naredne god
let date1TImestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2TImestamp = firebase.firestore.Timestamp.fromDate(date2);

db.collection("tasks").where("due_date", ">=", date1TImestamp).where("due_date", "<", date2TImestamp).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.data());
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})


// 3:

let now2 = new Date();
let date1TImestamp2 = firebase.firestore.Timestamp.fromDate(now2);

db.collection("tasks").where("due_date", "<=", date1TImestamp2).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.data());
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})


// 4:

let now3 = new Date();
let date1TImestamp3 = firebase.firestore.Timestamp.fromDate(now3);

db.collection("tasks").where("due_date", "<=", date1TImestamp3).get().then(snapshot => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.data());
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// VEZBANJE 3:

// 1:

// Prvi nacin:
db.collection("movies").get().then(data => {
    if (!data.empty) {
        data.forEach(el => {
            if (el.data().director === "Russo Brothers") {
                console.log("Filmovi sa unetim imenom rezisera:", el.data());
            }
        })
    } else {
        console.log("Nema rezultata.");
    }
}).catch(err => {
    console.log("Can't FETCH data:", err);
});

// Drugi nacin:
db.collection("movies").where("director", "==", "Russo Brothers").get().then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(el => {
            console.log("Filmovi sa unetim imenom rezisera (drugi nacin):", el.data());
        })
    }
}).catch(err => {
    console.log("Can't FETCH data:", err);
});

// 2:

// Prvi nacin:
db.collection("movies").get().then(data => {
    if (!data.empty) {
        data.forEach(el => {
            if (el.data().rating >= 5 && el.data().rating <= 10) {
                console.log("Filmovi sa ocenom izmedju 5 i 10:", el.data());
            }
        })
    }
});

// Drugi nacin:
db.collection("movies").where("rating", ">=", 8).where("rating", "<=", 10).get().then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(el => {
            console.log("Filmovi sa ocenom izmedju 5 i 10 (drugi nacin):", el.data());
        })
    }
}).catch(err => {
    console.log("Can't FETCH data:", err);
});

// 3:
db.collection("movies").where("genres", "array-contains-any", ["Comedy", "Drama", "Tragedy"]).get().then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(el => {
            console.log("Sa zanrom (Komedija,Drama ili Tragedija): ", el.data());
        })
    }
}).catch(err => {
    console.log("Nastao ej ERROR:", err);
})

// 4:

db.collection("movies").where("release", ">", 2000).where("release", "<=", 2100).get().then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(el => {
            console.log("Sa godinom izlaska: ", el.data());
        })
    }
}).catch(err => {
    console.log("Nastao ej ERROR:", err);
})

// 5:

db.collection("movies").orderBy("rating", "desc").limit(1).get().then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(el => {
            console.log("Najbolje ocenjeni: ", el.data());
        })
    }
}).catch(err => {
    console.log("Nastao ej ERROR:", err);
})

// 6: 

db.collection("movies").where("genres", "array-contains", "Drama").orderBy("rating", "asc").limit(1).get().then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(el => {
            console.log("Najlosije ocenjeni koji je zanr Drama: ", el.data());
        })
    }
}).catch(err => {
    console.log("Nastao ej ERROR:", err);
})