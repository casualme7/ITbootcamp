let k = 673;
let delilac = k;
let saKoliko = 0;

while (delilac >= 0) {
    if (k % delilac == 0) {
        saKoliko++
    }
    delilac--;
}
if (saKoliko == 2) {
    console.log(`Broj ${k} je prost broj`)
} else {
    console.log(`Broj ${k} je slozen broj`)
}