const camelize = (str) => {
	return str
		.split('-')
		.map(
			(a, i) => i == 0 ? a : a[0].toUpperCase() + a.slice(1)
		)
		.join('')
 }

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))