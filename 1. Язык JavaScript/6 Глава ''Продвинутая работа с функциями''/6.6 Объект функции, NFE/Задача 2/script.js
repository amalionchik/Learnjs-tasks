
const sum = (x) => {
	let sumToUp = x
	function f(a) {
	sumToUp += a
	return f
	}
	f.toString = ()=> sumToUp
	
	return f
	}

console.log(sum(1)(2).toString())
console.log(sum(5)(-1)(2).toString())
console.log(sum(6)(-1)(-2)(-3).toString())
console.log(sum(0)(1)(2)(3)(4)(5).toString())