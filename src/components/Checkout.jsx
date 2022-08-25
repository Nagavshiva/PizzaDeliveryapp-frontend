import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cartReducer);
	const cartItems = cartState.cartItems;

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_0tDOONDQsts3xF",
			amount: data.amount,
			currency: data.currency,
			name: cartItems.name,
			description: "Test Transaction",
			image: cartItems.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8080/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: cartItems.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			{cartItems.map((cart)=>{
				return(
					<>
					<div className="book_container">
				<img src={cart.image} alt="book_img" className="book_img" />
				<p className="book_name">{cart.name}</p>
				<p className="book_author">By {cart.category}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {cart.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
					</>
				)
			})}
		</div>
	);
}

export default App;