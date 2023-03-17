function sayHi() {
	alert( this.name );
 }
 sayHi.test = 5;
 
 let bound = sayHi.bind({
	name: "Вася"
 });
 
 alert( bound.test ); // что выведет? почему?

// выведет undefined, потому что в объекте bound не будет свойства test