// Check Whether a Character Exists
let text = "JavaScript";


if (text.includes("S")) {
    console.log("Found");
} else {
    console.log("Not Found");
}

// Time Complexity: O(n)


// Reverse a String (basic interview program)
let text = "Hello";
let reverse = "";


for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
}


console.log(reverse);

// Time Complexity: O(n)
