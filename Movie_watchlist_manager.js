let movies = ["Inception", "Interstellar", "Avatar"];

movies.push("The Martian");

console.log("My Watchlist:");

movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
});

console.log("Total Movies:", movies.length);
