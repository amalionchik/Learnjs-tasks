// // 1
// try {
// 	начать работу
// 	работать
//  } catch (e) {
// 	обработать ошибку
//  } finally {
// 	очистить рабочее пространство
//  }


// // 2
// try {
// 	начать работу
// 	работать
//  } catch (e) {
// 	обработать ошибку
//  }
 
//  очистить рабочее пространство



// если нет finally, то в некоторых случаях очистка может не выполнится, так что да, преимущество определенно есть

function someFunction() {

	try {
		console.log('start')

		throw new Error('error!!!')
	} catch (e) {
		if('processing failed') {
		 throw e;
		}

	} finally {
		console.log('clear')
		}

}

someFunction()