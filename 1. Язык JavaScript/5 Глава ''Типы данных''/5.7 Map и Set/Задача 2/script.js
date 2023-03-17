function aclean(arr) {
	let obj = {}

	for (let i = 0; i < arr.length; i++) {

		let a = arr[i]
		.toLowerCase()
		.split("")
		.sort()
		.join("")

		obj[a] = arr[i]
	}

	return Object.values(obj)
}




 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 console.log( aclean(arr) );