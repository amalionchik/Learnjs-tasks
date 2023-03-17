function delay(f, ms) {
	return function() {
		setTimeout(() => f.apply(this, arguments), ms)
	}
}

let f3333 = delay(console.log, 3333)
f3333("test")