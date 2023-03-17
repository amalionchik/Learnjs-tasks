// Пример 1
function checkAge(age) {
	if (age > 18) {
	  return true;
	} else {
	  // ...
	  return confirm('Родители разрешили?');
	}
 }

// Пример 2
function checkAge(age) {
	if (age > 18) {
	  return true;
	}
	// ...
	return confirm('Родители разрешили?');
 }

// различий нет, функции будут работать одинаково