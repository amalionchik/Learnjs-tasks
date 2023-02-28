let messages = [
	{ text: "Hello", from: "John" },
	{ text: "How goes?", from: "John" },
	{ text: "See you soon", from: "Alice" }
 ];

let dates = new WeakMap()
dates.set(messages[0], new Date())

console.log(dates)
// в консоли vs code не выведет из-за того что у них с браузером разные движки или что-то такое, так что нужно пробовать в браузере, там все работает