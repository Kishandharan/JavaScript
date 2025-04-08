// Calculator
var input1 = 0;
var operat = "";
var input2 = 0;

require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
}).question("Number1: ", (usrinp) => {
	input1 = Number(usrinp);
})

require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
}).question("Number2: ", (usrinp) => {
	input2 = Number(usrinp);
})


require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
}).question("Operat: ", (usrinp) => {
	operat = usrinp;
})

