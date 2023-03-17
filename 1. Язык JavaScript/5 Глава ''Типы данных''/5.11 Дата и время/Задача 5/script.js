function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0)
	return date.getDate()
}

console.log(getLastDayOfMonth(2023, 8))
console.log(getLastDayOfMonth(2023, 4))
console.log(getLastDayOfMonth(2023, 1))
console.log(getLastDayOfMonth(2020, 1))