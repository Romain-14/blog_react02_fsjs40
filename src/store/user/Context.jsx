import { createContext, useReducer } from "react";
import userReducer from "./reducer";

const Context = createContext();
const INITIAL_STATE = {
	isLogged: false,
	username: "",
};

function Provider(props) {
	const [user, dispatch] = useReducer(userReducer, INITIAL_STATE);

	function login(username) {
		dispatch({ type: "LOGIN", payload: username });
	}

    function logout(){
        dispatch({type: "LOGOUT"});
    }

	return (
		<Context.Provider
			value={{
				user,
				login,
				logout,
			}}
		>
        
			{props.children}
		</Context.Provider>
	);
}

export { Context };

export default Provider;
