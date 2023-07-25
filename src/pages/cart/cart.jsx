import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import { Contact } from "../contact/contact";
import { Login } from "../login/login";
export const Cart = () => {
	const {
		cartItems,
		getTotalCartAmount,
		checkout,
		products,
		isContactOpen,
		setIsContactOpen,
		isLoginOpen,
		setIsLoginOpen,
	} = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	const navigate = useNavigate();

	return (
		<>
			<Contact open={isContactOpen} onClose={() => setIsContactOpen(false)}></Contact>
			<Login open={isLoginOpen} onClose={() => setIsLoginOpen(false)}></Login>
			<div className="cart">
				<div>
					<h1>Your Cart Items</h1>
				</div>
				<div className="cart">
					{products.map((product) => {
						if (cartItems[product.id] > 0) {
							return <CartItem data={product} key={product.key} />;
						}
						return null;
					})}
				</div>

				{totalAmount > 0 ? (
					<div className="checkout">
						<p> Subtotal: ${totalAmount} </p>
						<button onClick={() => navigate("/")}> Continue Shopping </button>
						<button
							onClick={() => {
								checkout();
								navigate("/checkout");
							}}
						>
							Checkout
						</button>
					</div>
				) : (
					<h1> Your Shopping Cart is Empty</h1>
				)}
			</div>
		</>
	);
};
