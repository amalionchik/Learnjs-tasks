function ucFirst(string) {
	if (!string) {
	return string
	} else {
	return string[0].toUpperCase() + string.slice(1)
	}
}

console.log(ucFirst("вася"))