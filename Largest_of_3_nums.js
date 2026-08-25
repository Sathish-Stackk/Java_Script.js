let a = 25;
let b = 40;
let c = 15;

let largest;

if (a > b && a > c) {
    largest = a;
} else if (b > a && b > c) {
    largest = b;
} else {
    largest = c;
}

console.log("Largest:", largest);
