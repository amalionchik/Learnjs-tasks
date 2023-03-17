const LI = document.getElementsByTagName('li')

for (let li of LI) {
	let childsCount = li.getElementsByTagName('li').length
	
	if (!childsCount) continue
	else {
		li.firstChild.data += ` [${childsCount}]`
	}

}