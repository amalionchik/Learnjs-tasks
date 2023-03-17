let id

function update() {

	block = document.getElementById('clock')
	date = new Date()

	hh = date.getHours()
	if (hh < 10) hh = '0' + hh
	block.children[0].innerHTML = hh

	mm = date.getMinutes()
	if (mm < 10) mm = '0' + mm
	block.children[1].innerHTML = mm

	ss = date.getSeconds()
	if (ss < 10) ss = '0' + ss
	block.children[2].innerHTML = ss

}

function clockStart() {

	if (!id) {
		id = setInterval(update, 1000)
	}
	update()

}

function clockStop() {

	clearInterval(id)
	id = null

}