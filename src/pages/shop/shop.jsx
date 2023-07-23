import React, { useContext, useMemo } from "react";
// import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import { Contact } from "../contact/contact";
import { Login } from "../login/login";

export const Shop = () => {
	const { isContactOpen, setIsContactOpen, isLoginOpen, setIsLoginOpen, getAllProducts, products } =
		useContext(ShopContext);

	useMemo(() => {
		getAllProducts();
	}, []);

	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>Sunny's Online Shop :)</h1>
			</div>
			<Contact open={isContactOpen} onClose={() => setIsContactOpen(false)}></Contact>
			<Login open={isLoginOpen} onClose={() => setIsLoginOpen(false)}></Login>
			<div className="products">
				{products.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
