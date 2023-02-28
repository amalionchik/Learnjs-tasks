function pow(x, n) {
	alert(x ** n)
}

let x = +prompt('Введите число')
let n = +prompt('Введите степень, в которую вы хотите возвести это число')

if (n < 1) {
	alert('Вы ввели ненатуральную степень, попробуйте еще раз')
} else {
	alert(pow(x, n))
}