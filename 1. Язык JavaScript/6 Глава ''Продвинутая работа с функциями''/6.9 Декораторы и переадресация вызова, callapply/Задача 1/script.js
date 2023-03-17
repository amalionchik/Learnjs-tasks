function spy(func) {

	function wrapper(...a) {
		wrapper.calls.push(a)
		return func.apply(this, a)
	}
	wrapper.calls = []
	return wrapper
}

spy()



function work(a, b) {
	console.log( a + b ); // произвольная функция или метод
 }
 
 work = spy(work);
 
 work(1, 2); // 3
 work(4, 5); // 9
 
 for (let args of work.calls) {
	console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
 }