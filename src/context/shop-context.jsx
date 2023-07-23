import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [products, setProducts] = useState([]);

	const getAllProducts = () => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.log(err));
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const getTotalItemAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalAmount += cartItems[item];
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};
	const deleteFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
	};
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const checkout = () => {
		setCartItems(getDefaultCart());
	};

	const contextValue = {
		cartItems,
		addToCart,
		getTotalItemAmount,
		updateCartItemCount,
		removeFromCart,
		getTotalCartAmount,
		checkout,
		isContactOpen,
		setIsContactOpen,
		isLoginOpen,
		setIsLoginOpen,
		deleteFromCart,
		getAllProducts,
		products,
	};

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
