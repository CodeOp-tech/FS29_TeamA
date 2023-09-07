import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Register() {
	const [credentials, setCredentials] = useState({
		firstname:"",
		lastname:"",
		email: "",
		password: "",
		marketing: 0
	});

	const {firstname, lastname, email, password, marketing} = credentials;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const register = async () => {
		try {
			console.log(credentials);
			const { data } = await axios ("/api/auth/register", {
				method: "POST",
				data: credentials
			});
			console.log(data.message);
			setCredentials(data.message);

		} catch (error) {
			console.log(error);
		}
	};

	return (
	<div className="password-reset">
		<div className="email-form">
			<h4>CREATE AN ACCOUNT</h4>
			<h2>Hey there! Let&apos;s get started</h2>
			<div className="loginForm">
						<div className="firstname">
							<p>Firstname</p>
							<input
								value={firstname}
								onChange={handleChange}
								name="firstname"
								type="text"
								className="form"
								placeholder="firstname"
							/>
						</div>
						<div className="lastname">
							<p>Lastname</p>
							<input
								value={lastname}
								onChange={handleChange}
								name="lastname"
								type="text"
								className="form"
								placeholder="lastname"
							/>
						</div>
						<div className="email">
							<p>Email</p>
							<input
								value={email}
								onChange={handleChange}
								name="email"
								type="text"
								className="form"
								placeholder="email address"
							/>
						</div>
						<div className="password">
							<p>Password</p>
							<input
								value={password}
								onChange={handleChange}
								name="password"
								type="text"
								className="form"
								placeholder="password"
							/>
						</div>
						<div>
							{/* this is where we would add the marketing checkbox */}
						</div>
						<div>
							<button className="signIn" onClick={register}>
								Create an Account
							</button>
						</div>
						<div className="form-footer">
							<Link to="/Login">Click to Sign In</Link>
						</div>
			</div>

		</div>
		<div className="reset-promo">
				<h3>Some of the great reasons to join</h3>
				<h2>Exclusive Offers</h2>
				<h2>Rewards + Treats</h2>
				<h2>Digital Receipts</h2>
			</div>
	</div>
	)
}
