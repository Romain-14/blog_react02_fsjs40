import { Link } from "react-router-dom";

function Register() {
	return (
		<main>
			<Link to={"/"}>Back to home</Link>

			<form>
                <legend>Register</legend>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" id="username" required />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" required />

				<button type="submit">Register</button>
			</form>
		</main>
	);
}

export default Register;
