let prices = [120, 250, 80, 150];
let discount = 10;

let total = 0;
for (let price of prices) {
    total += price;
}

let discountAmount = total * discount / 100;
let finalAmount = total - discountAmount;

console.log("Total:", total);
console.log("Discount:", discountAmount);
console.log("Final Amount:", finalAmount);
