function truncate(str, maxlength) {
	(str.length > maxlength) ? console.log(str.slice(0, maxlength - 1) + '…') : console.log(str)
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
truncate("Всем привет!", 20)