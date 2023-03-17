	function getCoords(el) {
	box = el.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	}
}

function showNote(a, pos, html) {

	n = document.createElement('div')
	n.innerHTML = html
	n.className = "note"
	document.body.append(n)

	positionAt(a, pos, n)

}

function positionAt(a, pos, el) {

	coordinates = a.getBoundingClientRect()

	switch (pos) {

		case "top-out":
			el.style.left = `${coordinates.left}px`
			el.style.top = `${coordinates.top - el.offsetHeight}px`
		break

		case "top-in":
			el.style.left = `${coordinates.left}px`
			el.style.top = `${coordinates.top}px`
		break


		case "right-out":
			el.style.left = `${coordinates.left + a.offsetWidth}px`
			el.style.top = `${coordinates.top}px`
		break

		case "right-in":
			el.style.left = `${coordinates.left + a.offsetWidth - el.offsetWidth}px`
			el.style.top = `${coordinates.top + coordinates.top}px`
			el.style.width = '150px'
		break


		case "bottom-out":
			el.style.left = `${coordinates.left}px`
			el.style.top = `${coordinates.top + a.offsetHeight}px`
		break

		case "bottom-in":
			el.style.left = `${coordinates.left}px`
			el.style.top = `${coordinates.top + a.offsetHeight - el.offsetHeight}px`
		break

	}
}

quote = document.querySelector('blockquote')

showNote(quote, "top-in", "note top-in");
showNote(quote, "top-out", "note top-out");
showNote(quote, "right-out", "note right-out");
showNote(quote, "bottom-in", "note bottom-in");