// Prime number checker in Node.js (no prompt)

// Import readline module
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
readline.question("Enter a positive number: ", (num) => {
    const number = parseInt(num);
    let isPrime = true;

    // Check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    // Check if number is greater than 1
    else if (number > 1) {
        // Looping through 2 to number/2
        for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is not a prime number`);
        }
    }

    // Check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }

    readline.close(); // Close the input
});
