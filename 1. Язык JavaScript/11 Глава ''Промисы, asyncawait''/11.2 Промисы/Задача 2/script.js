function delay(ms) {
	return new Promise(res => setTimeout(res, ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));