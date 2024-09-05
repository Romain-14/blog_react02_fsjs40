import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../store/user/Context";

function Header() {
	const state = useContext(Context);
    
	return (
		<header>
			<h1>Supa&apos; Blog</h1>
			<nav>
				<NavLink to={"/"}>Home</NavLink>

				{state.user.isLogged ? (
					<>
						<NavLink to={"/dashboard"}>Dashboard</NavLink>
						<button onClick={() => state.logout()}>Logout</button>
					</>
				) : (
					<NavLink to={"/authentication/login"}>Login</NavLink>
				)}
			</nav>
		</header>
	);
}

export default Header;
