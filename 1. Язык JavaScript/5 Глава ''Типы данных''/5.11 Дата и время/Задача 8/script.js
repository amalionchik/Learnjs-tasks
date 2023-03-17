function formatDate(date) {

	let a = new Date() - date
	if (a < 1000) {
		return 'прямо сейчас'
	}
	
	let sec = Math.floor(a / 1000)
	if (sec < 60) {
		return sec + ' сек. назад'
	}
	
	let min = Math.floor(a / 60000)
	if (min < 60) {
		return min + ' мин. назад'
	}
	
	let b = date
	b = [ '0' + b.getDate(), '0' + (b.getMonth() + 1), '' + b.getFullYear(), '0' + b.getHours(), '0' + b.getMinutes()]
	.map(component => component.slice(-2))

	return b.slice(0, 3).join('.') + ' ' + b.slice(3).join(':')
}



console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );