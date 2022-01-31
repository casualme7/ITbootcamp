let content = document.querySelector(".content");
let addMore = document.querySelector(".addMore");
let sendItButton = document.querySelector("#sendItButton");

let adding = new Audio("Sounds/adding.mp3");
adding.volume = 0.5;
let removing = new Audio("Sounds/removing2.mp3");
removing.volume = 0.5;
let loading = new Audio("Sounds/loading3.mp3");
loading.volume = 0.8;
let tick = new Audio("Sounds/tick.mp3");
tick.volume = 0.3;
let denied = new Audio("Sounds/denied.mp3");
denied.volume = 0.3;

// Ucacujemo nove podatke u BAZU PODATAKA sa inputima.
addMore.addEventListener("submit", function (e) {
    e.preventDefault();
    if (this.textInput.value === "" || this.descriptionInput.value === "") {
        this.textInput.placeholder = "Nothing to process";
        this.textInput.style.border = "3px solid red";
        this.descriptionInput.placeholder = "Nothing to process";
        this.descriptionInput.style.border = "3px solid red";
        denied.play();
    } else {
        loading.play();
        this.textInput.placeholder = "Enter title";
        this.textInput.style.border = "3px solid black";
        this.descriptionInput.placeholder = "Enter the Description";
        this.descriptionInput.style.border = "3px solid black";
        let obj = {
            title: this.textInput.value,
            description: this.descriptionInput.value,
            priority: this.priorityInput.checked
        }
        textInput.disabled = true;
        descriptionInput.disabled = true;
        priorityInput.disabled = true;
        sendItButton.disabled = true;
        sendItButton.value = "Sending data"
        let intervalX = setInterval(() => {
            sendItButton.value += ".";
        }, 500)
        setTimeout(() => {
            clearInterval(intervalX);
            textInput.value = "";
            descriptionInput.value = "";
            sendItButton.value = "Successfully added!"
            adding.play();
            db.collection("tasks").add(obj).then(response => {
                console.log("Object successfully added:", response.id);
            }).catch(err => {
                console.log("Object NOT added:", err);
            })
            setTimeout(() => {
                priorityInput.checked = false;
                textInput.disabled = false;
                descriptionInput.disabled = false;
                priorityInput.disabled = false;
                sendItButton.disabled = false;
                sendItButton.value = "SEND IT"
            }, 2000)
        }, 4000)
    }
})

db.collection("tasks").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(el => {
        if (el.type === "added") {
            let obj = el.doc.data();
            let titleP = document.createElement("p");
            titleP.innerText = `Title: ${obj.title}`;
            titleP.style.fontWeight = "bold";
            let priorityP = document.createElement("p");
            priorityP.innerText = `Priority: ${obj.priority}`
            if (obj.priority) {
                priorityP.style.color = "red";
            } else {
                priorityP.style.color = "black";
            }
            let descriptionP = document.createElement("p");
            descriptionP.innerText = `Description: ${obj.description}`;
            let buttoncic = document.createElement("button");
            buttoncic.innerText = "Delete";
            buttoncic.id = "deleteButton";
            let divForContent = document.createElement("div");
            divForContent.id = el.doc.id;
            divForContent.appendChild(titleP);
            divForContent.appendChild(priorityP);
            divForContent.appendChild(descriptionP);
            divForContent.appendChild(buttoncic);
            divForContent.classList.add("divForContent");
            content.appendChild(divForContent);
        } else if (el.type === "removed") {
            let deletedDiv = document.getElementById(el.doc.id);
            deletedDiv.remove();
        }
    })
});

let wholeDoc = document.querySelector(".wholeDoc");

wholeDoc.addEventListener("click", function (klik) {
    if (klik.target.tagName === "BUTTON") {
        let brojac = 5;
        klik.target.innerText = "Deleting in: 5"
        tick.play();
        let XXY = setInterval(() => {
            brojac--;
            klik.target.innerText = `Deleting in: ${brojac}`;
            tick.play();
            if (brojac === 1) {
                clearInterval(XXY);
                setTimeout(() => {
                    removing.play();
                    db.collection("tasks").doc(klik.target.parentElement.id).delete().then(() => {
                        console.log("Deleted id:", klik.target.parentElement.id);
                    }).catch(err => {
                        console.log("Error while deleting:", err);
                    })
                    brojac = 5;
                    klik.target.innerText = "Delete";

                }, 1000)
            }
        }, 1000)
    }
});