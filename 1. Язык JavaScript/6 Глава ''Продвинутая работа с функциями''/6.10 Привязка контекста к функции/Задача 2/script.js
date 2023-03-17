function f() {
	alert(this.name);
 }
 
 f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
 
 f();

// выведет Вася, изменить не можем