const makeChange = (c) => {
  // your name here
	
    // Initialize an object to store the count of each coin
    let change = { q: 0, d: 0, n: 0, p: 0 };
    
    // Define the values of each coin in cents
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;
    
    // Calculate the number of quarters
    change.q = Math.floor(amount / quarterValue);
    amount %= quarterValue;
    
    // Calculate the number of dimes
    change.d = Math.floor(amount / dimeValue);
    amount %= dimeValue;
    
    // Calculate the number of nickels
    change.n = Math.floor(amount / nickelValue);
    amount %= nickelValue;
    
    // Calculate the number of pennies
    change.p = amount; // Remainder is all pennies
    
    return change;
}

	

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
