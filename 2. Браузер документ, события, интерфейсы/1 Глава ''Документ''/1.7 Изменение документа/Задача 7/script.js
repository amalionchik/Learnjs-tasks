function createCalendar(elem, year, month) {

	m = month - 1
	d = new Date(year, m)
	table = `<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`

	for (i = 0; i < getDay(d); i++) {
		table += `<td></td>`
	}

	while (d.getMonth() == m) {
		table += `<td>${d.getDate()}</td>`

		if (getDay(d) % 7 == 6) {
			table += `<tr></tr>`
		}

		d.setDate(d.getDate() + 1)
	}

	if (getDay(d) != 0) {

		for (let i = getDay(d); i < 7; i++) {
			table += `<td></td>`
		}

	}

	table += `</tr></table>`
	elem.innerHTML = table
}

 function getDay(date) {
	day = date.getDay()

	if (day == 0) day = 7
	return day - 1

}

createCalendar(calendar, 2023, 3)