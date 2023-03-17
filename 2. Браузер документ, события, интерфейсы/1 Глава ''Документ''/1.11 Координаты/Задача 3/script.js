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

		case "top":
			el.style.left = `${coordinates.left}px`
			el.style.top = `${coordinates.top - el.offsetHeight}px`
			break



			case "right":
				el.style.left = `${coordinates.left + a.offsetWidth}px`
				el.style.top = `${coordinates.top}px`
			break



			case "bottom":
				el.style.left = `${coordinates.left}px`
				el.style.top = `${coordinates.top + a.offsetHeight}px`
			break

	}
}

quote = document.querySelector('blockquote')



showNote(quote, "top", "note above")
showNote(quote, "right", "note at the right")
showNote(quote, "bottom", "note below")