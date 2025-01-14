const makeChange = (c) => {
    // Calculate the number of quarters
    const q = Math.floor(c / 25);
    c %= 25; // Remaining cents after quarters

    // Calculate the number of dimes
    const d = Math.floor(c / 10);
    c %= 10; // Remaining cents after dimes

    // Calculate the number of nickels
    const n = Math.floor(c / 5);
    c %= 5; // Remaining cents after nickels

    // Remaining cents are all pennies
    const p = c;

    // Return the object with the counts
    return { q, d, n, p };
};

	

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
