function showNotification({t = 0, r = 0, className, html}) {

	notification = document.createElement('div')
	notification.className = "notification"
	if (className) {
		notification.classList.add(className)
	}

	notification.style.t = t + 'px'
	notification.style.r = r + 'px'
	notification.innerHTML = html
	document.body.append(notification)

	setTimeout(() => notification.remove(), 1500)
}

i = 1
setInterval(() => {
	showNotification({
		t: 10,
		r: 10,
		html: 'Hello ' + i++,
		className: "welcome"
	})
}, 5000)