const view = document.querySelector('#view')

function start() {
	textarea = document.createElement('textarea')
	textarea.className = 'edit'
	textarea.value = view.innerHTML
	textarea.onkeydown = (e) => {
		if (e.key == 'Enter') {
			this.blur()
		}
}

textarea.onblur = () => {
		end()
}

	view.replaceWith(textarea)
	textarea.focus()
}

function end() {
	view.innerHTML = textarea.value
	textarea.replaceWith(view)
}

view.onclick = () => {
	start()
}