// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true



// instaceof сравнивает по прототипу, а так как прототипы у нас равны, то и результат true