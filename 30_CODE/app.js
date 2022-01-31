/* Za pristup dokumentu:
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

// 1: Set
db.collection("customers").doc("customer4").set(obj).then().catch();
// 2: Update
db.collection("tasks").doc("task2").update({ priority: true }).then().catch();
// 3: Get
db.collection("tasks").doc("task2").get().then().catch();
// 4: Delete
db.collection("tasks").doc("task4").delete().then().catch();

// Brisanje zanra:
db.collection("customers").doc("customer4").update({ genres: firebase.firestore.FieldValue.arrayRemove("Comedy") }).then().catch();

// ADD I SET RAZLIKE:
// ADD - Dodaje nov dokument sa random ID - em
db.collection("tasks").add().then().catch();
// SET - Dodaje dokument sa vec unetim ID - jem
db.collection("...").doc(ime).set(obj)

// DETALJNIJE:

// Svaki doc ima doc.id;
// doc.data();
// Kada gledamo odredjen dokument da li postoji onda je: (doc.exists)
// Ako gledamo ceo snapshot i forEach petljom prolazimo onda je (!snapshot.empty)

// 1) Pristupanje konkretnom dokumentu:

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

// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije:
db.collection("customers").get().then((snapshot) => {
    if (!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    } else {
        console.log("Nema dokumenata u kolekciji");
    }
}).catch(err => {
    console.log("Nemoguce CATCH-ovati dokument:", err);
})

// 3) Dohvatanje dokumenata u odredjenom redosledu: ORDER BY:
db.collection("customers").orderBy("age", "desc").orderBy("name").get().then().catch() // Posle ide ono (!snapshot.empty) ostatak

// 4) Dohvatanje odredjenog broja dokumenata: LIMIT:
db.collection("customers").orderBy("age", "desc").orderBy("name").limit(2).get().then().catch() // Posle ide ono (!snapshot.empty) ostatak

// 5) Dohvatanje dokumenata koji zadovoljavanu odredjene kriterijume (filtriranje) WHERE:
db.collection("customers").where("age", "<=", 23).get().then().catch();

// ZA FILTRIRANJE:
// .where("addresses", "array-contains", "Nis") - Ako neki od stringova arraya sadrzi Nis
// .where("adresses", "array-contains-any", ["Nis", "Beograd"]) - Ako sadrzi bilo koji
// .where("age", "in", [22, 25, 28]). - Bilo koji broj*
// .where("priority", "==", true) - Gde je nesto jednako onome sto trazimo.
// .orderBy("name / age / sta god")
// .orderBy("name", "desc")  -> descending unazad
// .orderBy("name", "asc")  -> ascending unazad

// ON SNAPSHOT , DA UPDEJTUJE DOKUMENT KAKO SE BAZA PROMENI - PRIMER:
db.collection("tasks").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(el => {
        let type = el.type;
        let doc = el.doc;
        let id = doc.id;
        if (type === "added") {
            let obj = doc.data();
            let li = document.createElement("li");
            li.id = id;
            li.innerHTML = `${obj.title} - ${obj.start_date.toDate()} - ${obj.description}`
            ul.appendChild(li);
            if (obj.priority === true) {
                li.style.color = "red";
            }
            let button = document.createElement("button");
            button.innerText = "x";
            li.appendChild(button);
        } else if (type === "removed") {
            let li = document.querySelector(`#${id}`)
            li.remove();
        }
    })
});

// UPROSCENO:
db.collection("users").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(el => {
        if (el.type === "added") {
            let obj = el.doc.data();
            newP = document.createElement("p")
            newP.id = el.doc.id;
            newP.innerText = `${obj.title} - ${obj.nesto} - ${obj.drugoNesto}`
        } else if (el.type === "removed") {
            document.getElementById(el.doc.id).remove();
            // document.querySelector(`#${el.doc.id}`).remove();
        }
    })
})

// DA NAMESTIMO DA DUGME BRISE NEKI DEO IZ BAZE:
// Forma je ovo napred ili unutar bilo cega kliknemo:
forma.addEventListener("click", function (p) {
    // console.log(p.target.tagName);
    if (p.target.tagName === "BUTTON") {
        // Ako unutar forme u ovom slucaju prittinesmo nesto sto je dugme
        // onda gledamo koji je parent element i brisemo parent
        let li = p.target.parentElement;
        let id = li.id;
        // id je tehnicki: p.target.parentElement.id
        db.collection("tasks").doc(id).delete().then(() => {
            // alert("Uspesno izbrisan dokument!")
        }).catch(err => {
            console.log("ERROR:", err);
        })
    }
})