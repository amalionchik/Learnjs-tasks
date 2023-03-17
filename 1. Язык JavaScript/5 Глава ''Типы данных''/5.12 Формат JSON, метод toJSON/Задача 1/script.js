let user = {
	name: "Василий Иванович",
	age: 35
};

let userJSON = JSON.parse(JSON.stringify(user))

console.log(userJSON)