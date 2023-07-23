import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { ShopContext } from "../../context/shop-context";
import { Modal } from "../../components/Modal";

export const Contact = ({ onClose }) => {
	const { isContactOpen } = useContext(ShopContext);
	const form = useRef();
	const [msg, setMsg] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_k21tg8s", "template_8aq38hi", form.current, "5SzJoWUkRHKf1tpY1");
		setMsg("Message Sent! Thank you.");
		e.target.reset();
	};
	return (
		<Modal open={isContactOpen} onClose={onClose}>
			<section className="contact">
				<h2 className="text-light">Contact</h2>
				<div className="container contact__container">
					<form ref={form} onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Your Name" required />
						<input type="email" name="email" placeholder="Your e-mail" required />
						<textarea name="message" rows="7" required placeholder="Write your message"></textarea>
						<button type="submit" className="btn btn-primary">
							Send
						</button>
						<span>{msg}</span>
					</form>
				</div>
			</section>
		</Modal>
	);
};
