/* 1 способ */ const sumTo = (num) => {
	for (i = 1, sum = 0; i <= num; i++) {
		sum = sum + i
	}
	return sum
}

console.log(sumTo(3))



/* 2 способ */ const sumTo = (num) => {
		if (num == 1) {
			return 1
		} else {
			return num + sumTo(num - 1)
		}
}

console.log(sumTo(3))



/* 3 способ */ const sumTo = (num) => {
		return (num * (num + 1) / 2)
}

console.log(sumTo(3))