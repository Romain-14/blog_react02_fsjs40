import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/user/Context";

function Login() {
	const state = useContext(Context);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [msg, setMsg] = useState(null);

	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault();

		if (username.length <= 2) return setMsg("Nom trop court");

		state.login(username);
		navigate("/");
	}
	return (
		<main>
			<Link to={"/"}>Back to home</Link>

			{msg && <p>{msg}</p>}

			<form onSubmit={submitHandler}>
				<legend>Login</legend>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<button type="submit">Login</button>
			</form>
			<p>
				No account yet ? create one -&gt;{" "}
				<a href="/authentication/register">by clicking here</a>
			</p>
		</main>
	);
}

export default Login;
