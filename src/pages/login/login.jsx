/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect, useRef } from "react";
import { Modal } from "../../components/Modal";
import "./login.css";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../../context/shop-context";
import { useForm } from "react-hook-form";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;

export const Login = ({ onClose }) => {
	const [register, setRegister] = useState(false);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);
	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);
	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef?.current?.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		console.log(result);
		console.log(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [matchPwd, pwd]);

	useEffect(() => {
		setErrMsg("");
	}, [user, pwd, matchPwd]);

	const { isLoginOpen } = useContext(ShopContext);

	const form = useForm();

	const login = (e) => {
		e.preventDefault();
		e.target.reset();
	};

	return (
		<Modal open={isLoginOpen} onClose={onClose}>
			<div className="center">
				<section className="login">
					{register ? (
						<>
							<p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">
								{errMsg}
							</p>
							<h2 className="text-light">Register</h2>
							<div className="login login__container">
								<form ref={form} onSubmit={login}>
									<label htmlFor="username">
										Username:
										<span className={validName ? "valid" : "hide"}>
											<FontAwesomeIcon icon={faCheck} />
										</span>
										<span className={validName || !user ? "hide" : "invalid"}>
											<FontAwesomeIcon icon={faTimes} />
										</span>
									</label>
									<input
										type="text"
										name="username"
										ref={userRef}
										autoComplete="off"
										onChange={(e) => setUser(e.target.value)}
										placeholder="Username"
										required
										aria-invalid={validName ? "false" : "true"}
										aria-describedby="uidnote"
										onFocus={() => setUserFocus(true)}
										onBlur={() => setUserFocus(false)}
									/>
									<p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
										<FontAwesomeIcon icon={faInfoCircle} />
										4 to 24 characters. <br />
										Must begin with a letter. <br />
										Letters, numbers, hyphens, and underscores only.
									</p>
									<input type="text" name="password" placeholder="Password" required />
									<button type="submit" className="btn btn-primary">
										Login
									</button>
								</form>
							</div>
							Already Registered?
							<button onClick={() => setRegister(false)}>Sign in</button>
						</>
					) : (
						<>
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
							has not been registered?
							<button onClick={() => setRegister(true)}>Register</button>
						</>
					)}
				</section>
			</div>
		</Modal>
	);
};
