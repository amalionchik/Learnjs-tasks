function Calculator() {

	this.operations = {
		"-" : (a, b) => a - b,
		"+" : (a, b) => a + b
	}

	this.calculate = function(str) {
		let split = str.split(' '),
		a = +split[0],
		i = split[1],
		b = +split[2]
		return this.operations[i](a, b)
	}

	this.addMethod = function(t, f) {
		this.operations[t] = f
	}
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") )

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log( result )