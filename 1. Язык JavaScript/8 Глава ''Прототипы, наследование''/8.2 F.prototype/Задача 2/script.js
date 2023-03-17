function number(x) {
	this.x = x
}

let number1 = new number('12')
let number2 = new number1.constructor('4213')

console.log(number2.x)





function number(x) {
	this.x = x
}

number.prototype = {}

let number1 = new number('12')
let number2 = new number1.constructor('4213')

console.log(number2.x)
