var x = 63;

if (typeof x !== "number") {
    console.log("x is not a number");
};

if (x % 2 == 0) {
    console.log("x is even number");
}

if (x % 2 !== 0) {
    console.log("x is odd number");
}

if (x === 0) {
    console.log("x is 0");
}

var y = 1;
for (y = 1; y <= 100; y++) {
    console.log(y);
}