main = document.forms.calculator

function calculate() {
	parent = +(main.money.value)
	if (!parent) return

	interest = main.interest.value * 0.01
	if (!interest) return

	years = main.months.value / 12
	if (!years) return

	result = Math.round(parent * (1 + interest) ** years)
	height = `${result / main.money.value * 100}px`

	document.querySelector('#height-after').style.height = height
	document.querySelector('#money-after').innerHTML = result
	document.querySelector('#money-before').innerHTML = main.money.value
}



main.interest.oninput = calculate
main.months.onchange = calculate
main.money.oninput = calculate
calculate()