thumbs.onclick = function(event) {
	thumbs = event.target.closest('a')

	if (!thumbs) return
	showThumbs(thumbs.href, thumbs.title)
	event.preventDefault()
}

function showThumbs(href, title) {
	largeImg.alt = title
	largeImg.src = href
}