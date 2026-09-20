function isValidRoman(roman) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = values[roman[i]];
        const next = values[roman[i + 1]] || 0;

        if (!current) {
            return false;
        }

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total > 0;
}

const input = prompt("Enter a Roman numeral:");

console.log(
    isValidRoman(input.toUpperCase())
        ? "Valid Roman numeral"
        : "Invalid Roman numeral"
);
