let messages = [
	{text: "Hello", from: "John"},
	{text: "How goes?", from: "John"},
	{text: "See you soon", from: "Alice"}
 ];


let checked = new WeakSet()
checked.add(messages[0])
checked.add(messages[0])

// messages.shift()
// раскомментируйте строку выше, чтобы проверить как работает код при удалении части массива

checked.has(messages[0]) ? console.log(true) : console.log(false)