function func1(cb){
	console.log("foo")
	cb()
	console.log("bar")
}

function callback(){
	console.log("Executing callback")
}

func1(callback)