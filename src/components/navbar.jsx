import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
	const { getTotalCartAmount } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	return (
		<div className="navbar">
			<div className="links">
				<Link to="/shopping-cart-react/"> Shop </Link>
				<Link to="/shopping-cart-react/contact"> Contact </Link>
				<Link to="/shopping-cart-react/cart">
					<ShoppingCart size={32} />
					<div>{totalAmount > 0 && totalAmount}</div>
				</Link>
			</div>
		</div>
	);
};
