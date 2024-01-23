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
	<div className="h-screen p-14">
		<div className="minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px] password-reset password-reset">
			<div className="email-form">
				<h1>CREATE AN ACCOUNT</h1>
				<h2>Hey there! Let&apos;s get started</h2>
				<div className="loginForm">
							<div className="firstname">
								<p>Firstname</p>
								<input
									value={firstname}
									onChange={handleChange}
									name="firstname"
									type="text"
									placeholder="firstname"
									className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
									focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
									disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
									invalid:border-pink-500 invalid:text-pink-600
									focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								/>
							</div>
							<div className="lastname">
								<p>Lastname</p>
								<input
									value={lastname}
									onChange={handleChange}
									name="lastname"
									type="text"
									placeholder="lastname"
									className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
									focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
									disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
									invalid:border-pink-500 invalid:text-pink-600
									focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								/>
							</div>
							<div className="email">
								<p>Email</p>
								<input
									value={email}
									onChange={handleChange}
									name="email"
									type="text"
									placeholder="email address"
									className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
									focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
									disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
									invalid:border-pink-500 invalid:text-pink-600
									focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								/>
							</div>
							<div className="password">
								<p>Password</p>
								<input
									value={password}
									onChange={handleChange}
									name="password"
									type="text"
									placeholder="password"
									className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
									focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
									disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
									invalid:border-pink-500 invalid:text-pink-600
									focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								/>
							</div>
							<div>
								{/* this is where we would add the marketing checkbox */}
							</div>
							<div>
								<button className="text-neutral-100 bg-gradient-to-r from-primary-400 to-primary-800 focus:ring-4 focus:outline-none focus:bg-primary-400 font-medium text-md w-full sm:w-auto px-6 py-3 text-center rounded-full" onClick={register}>
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
	</div>
	)
}
