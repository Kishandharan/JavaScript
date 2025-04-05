// Factorial Finder
var input = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

input.question("Number to find the factorial of: ", userinp =>{
	var num = Number(userinp);
	var prom = new Promise((success, failure) =>{
		var result;
		for(var x = 1; x <= num; x++){
			if(x == 1){
				result = x;
			}else{
				result = result * x;
			} 
		}

		console.log(result);
		input.close();
	})
})