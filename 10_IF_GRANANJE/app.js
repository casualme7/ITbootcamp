console.log(":D")

if (false) {
    console.log("Ispunjen uslov")
}

console.log("Naredni kod...")

// operatori poredjenja 
// == , != , < , > , <= , >= 

let a = 5;
let b = 7;

if (a == b) {
    console.log("JESU")
}

a = 10;
b = 14;

if (a != b) {
    console.log("A i B nisu jednake vrednosti")
}

a = 4;
b = 44;

if (a < b) {
    console.log("A je strogo manje od B")
}

if (a <= b) {
    console.log("A je manje ili jednako od B")
}


a = 5;
b = 5;

if (a == b) {
    console.log("A i B su jednaki")
}

if (a === b) {
    console.log("A i B nisu jednaki")
}

a = 7;
b = "7";

if (a !== b) {
    console.log("A i B nisu jednaki bilo po tipu , bilo po vrednosti")
}


let x = 3;
let y = 4;
let z = 5;

if (x+y == z) {
    console.log("X + Y je jednako za Z")
}