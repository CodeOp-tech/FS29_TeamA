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
		<div className="h-screen p-14">
			<div className="minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px] password-reset">
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
											className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
											focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
											disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
											invalid:border-pink-500 invalid:text-pink-600
											focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								/>
							</div>
							<div>
								<button className="text-neutral-100 bg-gradient-to-r from-primary-400 to-primary-800 focus:ring-4 focus:outline-none focus:bg-primary-400 font-medium text-md w-full sm:w-auto px-6 py-3 text-center rounded-full" onClick={passReset}>
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
		</div>
	)
}
