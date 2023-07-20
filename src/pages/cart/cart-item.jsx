import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteFromCart } = useContext(ShopContext);

	return (
		<div className="cartItem">
			<img src={productImage} />
			<div className="description">
				<p>
					<b>{productName}</b>
				</p>
				<p> Price: ${price}</p>
				<div className="countContainer">
					<div className="countHandler">
						<button onClick={() => removeFromCart(id)}> - </button>
						<input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
						<button onClick={() => addToCart(id)}> + </button>
					</div>
					<button className="delete" onClick={() => deleteFromCart(id)}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};
