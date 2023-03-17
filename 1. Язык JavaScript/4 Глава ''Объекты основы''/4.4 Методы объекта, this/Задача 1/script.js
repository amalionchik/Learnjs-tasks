function makeUser() {
	return {
	  name: "John",
	  ref: this
	};
 }
 
 let user = makeUser();
 
 alert( user.ref.name ); // Каким будет результат?

 // в результате будет ошибка, потому что ref обращается к функции makeUser, а т.к. она ничего не возвращает, то ref === undefined