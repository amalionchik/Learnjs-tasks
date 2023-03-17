document.onclick = function(el) {
	coords.innerHTML = el.clientX + ':' + el.clientY
}

let coordinates = field.getBoundingClientRect()

let answer = [

	[
	coordinates.left,
	coordinates.top
	],

	[
	coordinates.right,
	coordinates.bottom
	],

	[
	coordinates.left + field.clientLeft,
	coordinates.top + field.clientTop
	],

	[
	coordinates.left + field.clientLeft + field.clientWidth,
	coordinates.top + field.clientTop + field.clientHeight
	]
	
]



console.log(answer.join(''))