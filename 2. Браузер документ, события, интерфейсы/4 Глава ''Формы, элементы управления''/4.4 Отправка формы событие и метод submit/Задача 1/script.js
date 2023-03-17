function showP(text, callback) {
	showW()
	form = document.querySelector('#prompt-form')
	container = document.querySelector('#prompt-form-container')
	document.querySelector('#prompt-message').innerHTML = text
	form.text.value = ''

	function complete(v) {
		hide()
		container.style.display = 'none'
		document.onkeydown = null
		callback(v)
	}

	form.onsubmit = () => {
		v = form.text.value
		if (v == '') return false

		complete(v)
		return false
	}

	form.cancel.onclick = function() {
		complete(null)
	}

	document.onkeydown = function(e) {
		if (e.key == 'Escape') {
			complete(null)
		}
	}

	first = form.elements[0]
	last = form.elements[form.elements.length - 1]

	last.onkeydown = function(e) {
		if (e.key == 'Tab' && !e.shiftKey) {
			first.focus()
			return false
		}
	}

	first.onkeydown = function(e) {
		if (e.key == 'Tab' && e.shiftKey) {
			last.focus()
			return false
		}
	}

	container.style.display = 'block'
	form.elements.text.focus()
}

function showW() {
	wrapper = document.createElement('div')
	wrapper.id = 'cover-div'
	document.body.style.overflowY = 'hidden'
	document.body.append(wrapper)
}

function hide() {
	document.querySelector('#cover-div').remove()
	document.body.style.overflowY = ''
}

document.querySelector('#show-button').onclick = () => {
	showP("Введите что-нибудь <br> ...умное :)", function(v) {
		alert("Вы ввели: " + v)
	})
}