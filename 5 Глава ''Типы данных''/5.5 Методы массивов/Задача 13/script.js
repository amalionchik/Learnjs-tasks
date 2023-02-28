let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
 ];
 
const groupById = (arr) => {
	return arr.reduce((a, b) => {
		a[b.id] = b
		return a
	}, {

	})
}

 let usersById = groupById(users);
 
 /*
 // после вызова у нас должно получиться:
 
 usersById = {
	john: {id: 'john', name: "John Smith", age: 20},
	ann: {id: 'ann', name: "Ann Smith", age: 24},
	pete: {id: 'pete', name: "Pete Peterson", age: 31},
 }
 */

console.log(usersById)