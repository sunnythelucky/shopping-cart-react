import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="links">
				<Link to="/shopping-cart-react/"> Shop </Link>
				<Link to="/shopping-cart-react/contact"> Contact </Link>
				<Link to="/shopping-cart-react/cart">
					<ShoppingCart size={32} />
				</Link>
			</div>
		</div>
	);
};
