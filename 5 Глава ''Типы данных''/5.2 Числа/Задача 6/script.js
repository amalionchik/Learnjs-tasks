function randomInteger(min, max) {
	number = Math.random() * (max - min + 1) + min
	return Math.floor(number)
}

console.log(randomInteger(1, 10))