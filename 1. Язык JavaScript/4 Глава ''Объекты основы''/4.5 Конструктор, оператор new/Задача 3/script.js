function Accumulator(startingValue) {

	this.value = startingValue

	this.read = function() {
		this.value = this.value + +prompt('Введите число, которое нужно прибавить')
	}

}



 let accumulator = new Accumulator(1);
 accumulator.read();
 accumulator.read();
 alert(accumulator.value);