function getMaxSubSum(arr) {

	let intermediateSum = 0
	let maxSum = 0

	for (let item of arr) {
		intermediateSum += item
		maxSum = Math.max(maxSum, intermediateSum)
		if (intermediateSum < 0) {
			intermediateSum = 0
		}
	}

	return maxSum
}

console.log( getMaxSubSum([-1, 2, 3, -9]) )
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) )
console.log( getMaxSubSum([-2, -1, 1, 2]) )
console.log( getMaxSubSum([100, -9, 2, -3, 5]) )
console.log( getMaxSubSum([1, 2, 3]) )
console.log( getMaxSubSum([-1, -2, -3]) )