import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Gadget from "./pages/Gadget";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/gadgets/:id" element={<Gadget />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
