const copySorted = (arr) => {
	a = arr.slice().sort()
	return a
}

let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)
console.log(sorted)
console.log(arr)