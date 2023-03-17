let i = 1;
for(let li of document.querySelectorAll('li')) {
	li.style.position = 'relative';
	li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
	i++;
}



p = 0
w = 130
count = 3
list = carousel.querySelector('ul')
listLi = carousel.querySelectorAll('li')

carousel.querySelector('.back').onclick = () => {
	p += w * count;
	p = Math.min(p, 0)
	list.style.marginLeft = `${p}px`
}

carousel.querySelector('.next').onclick = () => {
	p -= w * count;
	p = Math.max(p, - w * (listLi.length - count))
	list.style.marginLeft = `${p}px`
}