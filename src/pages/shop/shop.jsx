import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Contact } from "../contact";
import { ShopContext } from "../../context/shop-context";
import { Login } from "../login";

export const Shop = () => {
	const { isContactOpen, setIsContactOpen, isLoginOpen, setIsLoginOpen } = useContext(ShopContext);
	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>Sunny's Online Shop</h1>
			</div>
			<Contact open={isContactOpen} onClose={() => setIsContactOpen(false)}></Contact>
			<Login open={isLoginOpen} onClose={() => setIsLoginOpen(false)}></Login>
			<div className="products">
				{PRODUCTS.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
