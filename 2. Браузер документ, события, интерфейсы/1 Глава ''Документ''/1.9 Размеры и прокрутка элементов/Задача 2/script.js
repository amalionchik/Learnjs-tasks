d = document.createElement('div')

d.style.overflowY = 'scroll'
d.style.width = '50px'
d.style.height = '50px'

document.body.append(d)
scrollWidth = d.offsetWidth - d.clientWidth
d.remove()



console.log(scrollWidth)