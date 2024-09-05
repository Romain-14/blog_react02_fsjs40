
function userReducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				isLogged: true,
				username: action.payload,
			};
		case "LOGOUT":
			return {
				isLogged: false,
				username: "",
			};
            
		default:
			console.log("Action inconnue");
			return state;
	}
}

export default userReducer;
