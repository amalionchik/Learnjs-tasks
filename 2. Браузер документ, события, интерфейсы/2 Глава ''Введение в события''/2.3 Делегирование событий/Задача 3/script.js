grid.onclick = function(e) {
	if (e.target.tagName != 'TH') return
	th = e.target
	sortGrid(th.cellIndex, th.dataset.type);
}

function sortGrid(num, type) {

	tbody = grid.querySelector('tbody')
	rows = Array.from(tbody.rows)

	let compare

	switch (type) {
		case 'number':
			compare = function(rowA, rowB) {
				return rowA.cells[num].innerHTML - rowB.cells[num].innerHTML
			}
		break
		
		case 'string':
			compare = function(rowA, rowB) {
				return rowA.cells[num].innerHTML > rowB.cells[num].innerHTML ? 1 : -1
			}
		break
	}

	rows.sort(compare)
	tbody.append(...rows)

}