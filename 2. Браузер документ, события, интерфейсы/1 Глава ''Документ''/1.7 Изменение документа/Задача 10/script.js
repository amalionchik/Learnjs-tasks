sort = Array.from(table.rows).slice(1)
.sort((a, b) => {
	if (a.cells[0].innerHTML > b.cells[0].innerHTML) return 1
	return -1
}) // можно сделать через тернарный оператор

table.tBodies[0].append(...sort)