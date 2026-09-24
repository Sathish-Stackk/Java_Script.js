let expenses = [
    { name: "Food", amount: 150 },
    { name: "Travel", amount: 80 },
    { name: "Books", amount: 300 }
];

let total = 0;

expenses.forEach(item => {
    console.log(item.name + ": ₹" + item.amount);
    total += item.amount;
});

console.log("Total Expenses: ₹" + total);
console.log("Average Expense: ₹" + (total / expenses.length).toFixed(2));
