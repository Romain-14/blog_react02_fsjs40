import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Partials/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Story from "./Components/Story";
import Dashboard from "./Components/Dashboard";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/story/:id" element={<Story />} />

				<Route path="/authentication/login" element={<Login />} />
				<Route path="/authentication/register" element={<Register />} />

				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
