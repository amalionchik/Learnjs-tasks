function showNote(a, pos, html) {

	n = document.createElement('div')
	n.innerHTML = html
	n.className = "note"
	document.body.append(n)

	positionAt(a, pos, n)

}

function positionAt(a, pos, elem) {

	coordinates = a.getBoundingClientRect()

	switch (pos) {

		case "top":
			elem.style.left = `${coordinates.left}px`
			elem.style.top = `${coordinates.top - elem.offsetHeight}px`
			break



			case "right":
			elem.style.left = `${coordinates.left + a.offsetWidth}px`
			elem.style.top = `${coordinates.top}px`
			break



			case "bottom":
			elem.style.left = `${coordinates.left}px`
			elem.style.top = `${coordinates.top + a.offsetHeight}px`
			break

	}
}

quote = document.querySelector('blockquote')



showNote(quote, "top", "note above")
showNote(quote, "right", "note at the right")
showNote(quote, "bottom", "note below")