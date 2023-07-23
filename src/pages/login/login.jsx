import React, { useContext, useRef } from "react";
import { Modal } from "../../components/Modal";
import "./login.css";
import { ShopContext } from "../../context/shop-context";

export const Login = ({ onClose }) => {
	const { isLoginOpen } = useContext(ShopContext);

	const form = useRef();

	const login = (e) => {
		e.preventDefault();
		console.log(form.current);
		e.target.reset();
	};
	return (
		<Modal open={isLoginOpen} onClose={onClose}>
			<div className="center">
				<section className="login">
					<h2 className="text-light">Welcome Back!</h2>
					<div className="login login__container">
						<form ref={form} onSubmit={login}>
							<input type="email" name="email" placeholder="Email" required />
							<input type="text" name="password" placeholder="Password" required />
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</form>
					</div>
				</section>
			</div>
		</Modal>
	);
};
