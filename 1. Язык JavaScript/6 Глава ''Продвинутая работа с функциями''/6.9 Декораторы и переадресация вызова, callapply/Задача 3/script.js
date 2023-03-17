function debounce(f, ms) {

	let cd = false
	return function() {

		if (!!cd) {
			return
		} else {
			f.apply(this, arguments)
		}

		cd = true
		setTimeout(() => cd = false, ms)
	}
	
}




 let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)