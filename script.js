const makeChange = (c) => {
    const q = Math.floor(c / 25);
    c %= 25; 
    const d = Math.floor(c / 10);
    c %= 10; // Remaining cents after dimes

    // Calculate the number of nickels
    const n = Math.floor(c / 5);
    c %= 5; 
    const p = c;

    return { q, d, n, p };
};
module.exports=makeChange;

	

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
