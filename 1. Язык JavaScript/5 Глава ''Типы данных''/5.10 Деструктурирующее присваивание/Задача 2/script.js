let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
 };

function topSalary(salaries) {
	let slr = 0
	let slrName = null

	for (let [a, b] of Object.entries(salaries)) {
		if (slr < b) {
			slr = b
			slrName = a
		}
	}
	return slrName
}

console.log(topSalary(salaries))