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

// fizz buzz program
var y = 1;
for (y = 1; y <= 100; y++) {
    if (y % 3 == 0 && y % 5 == 0) {
        console.log("FizzBuzz");
    } else if (y % 3 == 0) {
        console.log("Fizz");
    } else if (y % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(y);
    }
}
