import readline from "node:readline";
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter a number:", (num) => {
	//write your solution here
	//--------------------------------------
	if (num % 2 == 0) {
		console.log(num + " is even number");
	} else {
		console.log(num + " is odd number");
	}
	//------------------------------------------

	rl.close();
});
