import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
// import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Cartscreen from './screens/Cartscreen';
import Homescreen from './screens/Homescreen';
import OrderScreen from "./screens/OrderScreen";
import Checkout from "./components/Checkout";
function App() {
	const user = localStorage.getItem("token");

	return (
		<>
			<Router>
				<Routes>


					{user && <Route path="/" exact element={<Homescreen />} />}
					<Route path="/cart" exact element={<Cartscreen />} />
					<Route path="/orders" exact element={<OrderScreen />} />
					<Route path="/signup" exact element={<Signup />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/" element={<Navigate replace to="/login" />} />
					<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
					<Route path="/check" element={<Checkout/>}/>

				</Routes>
			</Router>
		</>
	);
}

export default App;
