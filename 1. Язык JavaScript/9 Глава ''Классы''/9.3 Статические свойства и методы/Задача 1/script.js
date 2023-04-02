class Rabbit extends Object {

	constructor(name) {
		super()
		this.name = name
	}

}

rabbit = new Rabbit("Кроль")
console.log( rabbit.hasOwnProperty('name') )