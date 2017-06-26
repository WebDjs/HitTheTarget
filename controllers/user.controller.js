module.exports = (userData) => {
	return {
		signUp: (req, res, next) => {
			let id = "5914370637843824a8637921";
			
			userData.getUserById(id)
				.then((user) => {
					console.log(user);
				});
		}
	}
}