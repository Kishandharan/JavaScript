var input = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

input.question("Prompt: ", name => {
	console.log(name)
	input.close();
})