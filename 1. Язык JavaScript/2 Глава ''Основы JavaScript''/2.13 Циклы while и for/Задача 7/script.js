function primeNumbers(num) {
	label: for (i = 2; i <= num; i++) {
		for (j = 2; j < i; j++) {
			if (i % j === 0) {
				continue label
			}
		}
		console.log(i)
	}
}

primeNumbers(100)