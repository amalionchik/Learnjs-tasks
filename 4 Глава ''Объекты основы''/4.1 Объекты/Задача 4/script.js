let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
 }

function salarySum(object) {
	sum = 0
	for(let key in salaries) {
		sum = sum + salaries[key] // можно записать, как sum += salaries[key], но мне кажется, так снижается читабельность
	}
	console.log(sum)
}

salarySum(salaries)