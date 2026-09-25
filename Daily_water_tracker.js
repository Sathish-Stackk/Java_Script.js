let glasses = [2, 3, 1, 2, 4];
let target = 8;

let total = glasses.reduce((sum, value) => sum + value, 0);

console.log("Water Consumed:", total, "glasses");
console.log("Daily Target:", target, "glasses");
console.log("Remaining:", Math.max(target - total, 0), "glasses");
