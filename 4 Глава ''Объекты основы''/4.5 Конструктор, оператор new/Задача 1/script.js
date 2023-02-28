let number = {
	username: 'Egor',
	someCode: 'somecode'
}

function A(obj) {
	return obj
}
function B(obj) {
	return obj
}

let a = A(number)
let b = B(number)

console.log(a == b)