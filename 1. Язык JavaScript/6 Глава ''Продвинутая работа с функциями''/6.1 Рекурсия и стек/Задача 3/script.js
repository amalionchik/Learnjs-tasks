// function fib(num) {
// 	return num <= 1 ? num : fib(num - 1) + fib(num - 2)
// }

// console.log(fib(3))
// console.log(fib(7))
// console.log(fib(77))

// по идее должно работать, но после запуска программы компьютер отказался работать и пришлось его перезапускать)) поэтому следующий вариант

function fib(num) {
	for (i = 3, a = 1, b = 1; i <= num; i++) {
		c = a + b
		a = b
		b = c
	}
	return c
}

console.log(fib(3))
console.log(fib(7))
console.log(fib(77))