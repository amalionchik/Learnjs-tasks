	// через setInterval
	const printNumbers = (a, b) => {

	const interval = setInterval(() => {
	console.log(a++);
	a === b && clearInterval(interval)
	},1000)
	}

	// через setTimeout
	const printNumbers = (a, b) => {

	setTimeout( function timer() {
	console.log(a++);
	a < b && setTimeout(timer,1000)
	},1000)

	}



printNumbers(5, 10)