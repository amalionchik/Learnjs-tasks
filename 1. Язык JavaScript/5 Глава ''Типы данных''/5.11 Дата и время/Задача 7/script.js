function getSecondsToTomorrow() {
	let now = new Date()

	let tmr = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate()+1)

	let res = tmr - now
	
	return (res / 1000).toFixed(0)
}

console.log(getSecondsToTomorrow())