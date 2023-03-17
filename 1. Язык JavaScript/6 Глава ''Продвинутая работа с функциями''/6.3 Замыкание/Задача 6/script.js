let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
 ];

function byField(field) {
	return (a, b) => {
		if (a[field] > b[field]) {
			return 1
		} else {
			return -1
		}
	}
}

name = []
users.sort(byField('name'))
users.map(a => name.push(a.name))
console.log(name)

age = []
users.sort(byField('age'))
users.map(a => age.push(a.name))
console.log(age)