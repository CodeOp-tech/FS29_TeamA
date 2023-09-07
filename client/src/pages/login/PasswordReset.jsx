import { Link } from "react-router-dom";
import { useState} from "react";
import "./Login.css";

export default function PasswordReset() {

	const [credentials, setCredentials] = useState({
	email: "Please enter your email"
	});

	const [data, setData] = useState(null);

	const { email } = credentials;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const passReset = async () => {
		console.log("An email has been sent to reset your password")
	};

	return (
		<div className="password-reset">
			<div className="email-form">
				<div className="login-form-inner">
					<h1>Forgot your password?</h1>
					<div className="loginForm">
						<div className="email">
							<input
										value={email}
										onChange={handleChange}
										name="email"
										type="text"
										className="form"
							/>
						</div>
						<div>
							<button className="signIn" onClick={passReset}>
								Send password reset link
							</button>
						</div>
						<div className="form-footer">
							<Link to="/Login">Click to Sign In</Link>
						</div>
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
