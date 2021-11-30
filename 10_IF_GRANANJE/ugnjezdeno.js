
let b1 = 15;
let b2 = 22;
let b3 = 54;

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Broj ${b1} je najveci`)
        if (b2 > b3) {
            console.log(`Broj ${b2} je srednji`)
            console.log(`Broj ${b3} je najmanji`)
        }
        else {
            console.log(`Broj ${b3} je srednji`)
            console.log(`Broj ${b2} je najmanji`)
        }
    }
    else {
        console.log(`Broj ${b1} je srednji`)
        if (b2 > b3) {
            console.log(`Broj ${b2} je najveci`)
            console.log(`Broj ${b3} je najmanji`)
        }
        else {
            console.log(`Broj ${b2} je najmanji`)
            console.log(`Broj ${b3} je najveci`)
        }
    }
}