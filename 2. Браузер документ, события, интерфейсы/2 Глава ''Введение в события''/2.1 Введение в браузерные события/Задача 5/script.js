menuElem = document.querySelector('#food')
titleElem = menuElem.querySelector('.title')

	titleElem.onclick = () => {
		menuElem.classList.toggle('open')
	}