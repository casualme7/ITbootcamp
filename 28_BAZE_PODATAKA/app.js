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
