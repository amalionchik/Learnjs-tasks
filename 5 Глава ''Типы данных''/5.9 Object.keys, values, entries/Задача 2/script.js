function count(obj) {
	count = Object.keys(obj).length
	return count
}

let user = {
	name: 'John',
	age: 30
 };
 
 console.log( count(user) ); // 2