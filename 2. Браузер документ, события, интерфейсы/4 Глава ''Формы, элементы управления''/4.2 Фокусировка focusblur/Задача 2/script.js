let table = document.getElementById('bagua-table')



let editTd

table.onclick = (e) => {

	target = e.target.closest('.edit-cancel,.edit-ok,td')

	if (!table.contains(target)) {
		return
	}

	if (target.className == 'edit-cancel') {
		end(editTd.element, false)
	} else if (target.className == 'edit-ok') {
		end(editTd.element, true)
	} else if (target.nodeName == 'TD') {
		if (editTd) {
			return
		} else {
			edit(target)
		}
	}
}

function edit(td) {
	editTd = {
		element: td,
		data: td.innerHTML,
	}

	td.classList.add('edit-td')

	textArea = document.createElement('textarea')
	textArea.style.width = `${td.clientWidth}px`
	textArea.style.height = `${td.clientHeight}px`
	textArea.className = 'edit-area'
	textArea.value = td.innerHTML
	td.innerHTML = ''
	td.appendChild(textArea)
	textArea.focus()
	td.insertAdjacentHTML("beforeEnd", '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>')
}

function end(td, ok) {

	if (ok) {
		td.innerHTML = td.firstChild.value
	} else {
		td.innerHTML = editTd.data
	}

	td.classList.remove('edit-td')
	editTd = null
}