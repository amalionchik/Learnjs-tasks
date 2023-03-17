let list = {
	value: 1,
	next: {
	  value: 2,
	  next: {
		 value: 3,
		 next: {
			value: 4,
			next: null
		 }
	  }
	}
 };

/* через цикл */

function printReverseList(list) {

	arr = [], x = list

	while (x) {
		arr.push(x.value)
		x = x.next
	}

	for (i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i])
	}
	
}
printReverseList(list)

/* через рекурсию */

function printReverseList(list) {

	if (list.next) {
		printReverseList(list.next)
	}
 
	console.log(list.value)

}

printReverseList(list)