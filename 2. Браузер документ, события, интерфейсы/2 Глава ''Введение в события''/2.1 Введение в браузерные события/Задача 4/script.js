field.onclick = function(e) {

	let fCoordinates = this.getBoundingClientRect()

	let bCoordinates = {
		top: e.clientY - fCoordinates.top - field.clientTop - ball.clientHeight / 2,
		left: e.clientX - fCoordinates.left - field.clientLeft - ball.clientWidth / 2
	};

	if (bCoordinates.top < 0) bCoordinates.top = 0
	if (bCoordinates.left < 0) bCoordinates.left = 0

	if (bCoordinates.left + ball.clientWidth > field.clientWidth) {
		bCoordinates.left = field.clientWidth - ball.clientWidth
	}

	if (bCoordinates.top + ball.clientHeight > field.clientHeight) {
		bCoordinates.top = field.clientHeight - ball.clientHeight
	}

	ball.style.left = `${bCoordinates.left}px`
	ball.style.top = `${bCoordinates.top}px`
 }