let numbers = [12, 45, 8, 67, 23];

let largest = numbers[0];

for (let number of numbers) {
    if (number > largest) {
        largest = number;
    }
}

console.log("Largest:", largest);


// Time Complexity: O(n)

// Space Complexity: O(1)
