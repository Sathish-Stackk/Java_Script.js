let str = "Programming";
let count = 0;

for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log("Vowels:", count);

// Time Complexity: O(n)

// Space Complexity: O(1)
