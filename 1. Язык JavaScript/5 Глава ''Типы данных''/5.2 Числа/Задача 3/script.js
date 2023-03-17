function readNumber() {
 
	do {
	  num = prompt("Введите число")
	} while (!isFinite(num))
 
	if (num == null || num == '') return null
 
	return +num
 }
 
 alert(`Число: ${readNumber()}`)