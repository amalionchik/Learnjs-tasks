const getWeekDay = (date) => {
	let a = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
	day = a[date.getDay()]
	return day
}

const date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"