// PRIMERI CALLBACKOVA

let myFunc = (callback) => {
    callback();
}

myFunc(() => {
    console.log("Callback triggeerd");
});

let sum = (callback) => {
    callback(5, 1);
    let br1 = 6;
    let br2 = 4
    callback(br1, br2);
}

sum((a, b) => {
    console.log(a + b)
});

function printSum(a, b) {
    console.log(a * b);
}

sum(printSum);

let my = f => {
    f(251);
}

my((xx) => {
    console.log(xx)
});

let racunaj = (str, cb) => {
    console.log(str);
    cb(2, 4)
}

racunaj("Oduzimanje", (x, y) => {
    console.log(x - y);
})

let racunaj2 = (str, cb) => {
    console.log(str, cb(11, 15));
}

racunaj2("Deljenje", (a, b) => {
    return a / b;
})

///////////////////////

let ispis = (str, cb) => {
    cb(str);
}

ispis("Nesto", (str) => {
    console.log(str);
})

//////////////////////

