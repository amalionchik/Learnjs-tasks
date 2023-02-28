let userName = prompt('Кто там?')

if (userName === '' || userName === null) {
	alert('Отменено')
} else if (userName === 'Admin') {
	let password = prompt('Пароль?')

	if (password === '' || password === null){
		alert('Отменено')
	} else if (password === 'Я главный') {
		alert('Здравствуйте!')
	} else {
		alert('Неверный пароль!')
	}
} else {
	alert ('Я вас не знаю')
}