import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import "./LoginForm.css";

export default function LoginForm() {

const [credentials, setCredentials] = useState({
	email: "",
	password: "",
});

const auth = useContext(authContext);
console.log(auth);

const { email, password } = credentials;

const handleChange = (e) => {
	const { name, value } = e.target;
	setCredentials({ ...credentials, [name]: value });
};

const login = async () => {
	auth.login(credentials);
};


return (
	<div className="pt-3">
		<div className="login-form">
		<div className="login-form-inner flex flex-col items-center">
			<h1 className="loginTitle">Login</h1>
			<div className="loginForm flex flex-col items-center">
				<div className="email">
				<input
					value={email}
					onChange={handleChange}
					name="email"
					type="text"
					required
					placeholder="email address"
					className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
				/>

				</div>
				<div className="password">
					<input
						value={password}
						onChange={handleChange}
						name="password"
						type="password"
						required
						placeholder="password"
						className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
						focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
						disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
						invalid:border-pink-500 invalid:text-pink-600
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
					/>
				</div>
					<div>						
						<button className="text-neutral-100 bg-gradient-to-r from-primary-400 to-primary-800 text-lg w-full sm:w-auto px-6 py-3 text-center rounded-full" onClick={login}>
							Sign In
						</button>
				</div>
			</div>

			<div className="form-footer">
				<Link className="hover:text-primary-400 text-lg"to="/Register">Register here!</Link>
				<Link className="hover:text-primary-400 text-lg" to="/PasswordReset">Forgot your password?</Link>
			</div>
		</div>
		</div>
	</div>
)
}
