let tooltipElem

document.onmouseover = function(e) {
	
	targ = e.target

	tooltipHtml = targ.dataset.tooltip
	if (!tooltipHtml) return

	tooltipElem = document.createElement('div')
	tooltipElem.className = 'tooltip'
	tooltipElem.innerHTML = tooltipHtml
	document.body.append(tooltipElem)

	coordinates = targ.getBoundingClientRect()

	let left = coordinates.left + (targ.offsetWidth - tooltipElem.offsetWidth) / 2
	if (left < 0) left = 0

	let top = coordinates.top - tooltipElem.offsetHeight - 5
	if (top < 0) {
		top = coordinates.top + targ.offsetHeight + 5
	}

	tooltipElem.style.left = `${left}px`
	tooltipElem.style.top = `${top}px`
}

document.onmouseout = function() {

	if (tooltipElem) {
		tooltipElem.remove()
		tooltipElem = null
	}

}