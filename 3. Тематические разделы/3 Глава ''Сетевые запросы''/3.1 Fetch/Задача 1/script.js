describe("getUsers", function() {

	it("gets users from GitHub", async function() {
	  let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
	  assert.equal(users[0].login, 'iliakan');
	  assert.equal(users[1].login, 'remy');
	  assert.equal(users[2], null);
	});
 
 });



async function getUsers(items) {

	jobs = []
	for(let item of items) {
		let job = fetch(`https://api.github.com/users/${item}`).then(
			response => {
				if (response.status != 200) {
					return null
				} else {
				return response.json()
				}
			},
			reject => {
				return null
			}
		)
		jobs.push(job)
	}
	results = await Promise.all(jobs)
	return results
	
}