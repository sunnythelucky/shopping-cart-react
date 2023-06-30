import React from "react";
import "./contact.css";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
	const form = useRef();
	const [msg, setMsg] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_k21tg8s", "template_8aq38hi", form.current, "5SzJoWUkRHKf1tpY1");
		setMsg("Message Sent! Thank you.");
		e.target.reset();
	};
	return (
		<form ref={form} onSubmit={sendEmail}>
			<input type="text" name="name" placeholder="Your Name" required />
			<input type="email" name="email" placeholder="Your e-mail" required />
			<textarea name="message" rows="7" required placeholder="Write your message"></textarea>
			<button type="submit" className="btn btn-primary">
				Send
			</button>
			<span>{msg}</span>
		</form>
	);
};
