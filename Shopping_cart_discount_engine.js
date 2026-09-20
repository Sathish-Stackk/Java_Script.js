const amount = Number(prompt("Enter cart amount:"));
const isMember = prompt("Are you a member? (yes/no)").toLowerCase();

let discount = 0;

if (amount >= 5000) {
    discount = 20;
} else if (amount >= 3000) {
    discount = 15;
} else if (amount >= 1500) {
    discount = 10;
}

if (isMember === "yes") {
    discount += 5;
}

const discountAmount = (amount * discount) / 100;
const finalAmount = amount - discountAmount;

console.log("Discount:", discount + "%");
console.log("You saved: ₹" + discountAmount);
console.log("Final amount: ₹" + finalAmount);
