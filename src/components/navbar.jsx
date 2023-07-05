import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
	const { getTotalItemAmount } = useContext(ShopContext);
	const itemAmount = getTotalItemAmount();

	return (
		<div className="navbar">
			<div className="links">
				<Link to="/shopping-cart-react/"> Shop </Link>
				<Link to="/shopping-cart-react/contact"> Contact </Link>
				<Link to="/shopping-cart-react/cart">
					<div>
						{itemAmount > 0 && (
							<>
								<div className="shopping-badge">{itemAmount}</div>
								<ShoppingCart size={32} />
							</>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
};
