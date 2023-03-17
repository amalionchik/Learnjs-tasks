let head = {
	glasses: 1
};

let table = {
	pen: 3,
	__proto__: head
};

let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table
};

let pockets = {
	money: 2000,
	__proto__: bed
}

console.log(pockets.pen)
console.log(bed.glasses)
console.log(table.money)

// по идее не важно как вызывать, через pockets.glasses, или через head.glasses, и так и так приложение не потеряет в производительности