import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import authContext from "../context/AuthContext";
import axios from "axios";
import "./Login.css";

function Login() {
	const [credentials, setCredentials] = useState({
   email: "test",
   password: "test",
	});

	const [data, setData] = useState(null);

	const auth = useContext(authContext);
	console.log(auth);

	const { email, password } = credentials;

	const handleChange = (e) => {
	const { name, value } = e.target;
	setCredentials({ ...credentials, [name]: value });
	};

	const login = async () => {
		auth.login(credentials);
		try {
			const { data } = await axios("/api/auth/profile", {
				headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
		});
		console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		auth.logout();
	};

	const requestData = async () => {
		try {
			const { data } = await axios("/api/auth/profile", {
				headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
		});
		console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
	<div className="page-conteiner">
      <div>
			{/* this can be removed since log-out option should be displayed on the Profile page */}
			{auth.isLoggedIn && (
							<div className="logout">
							<Link to="/Home" onClick={logout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 40 40" version="1.1">
									<title>Sign Out</title>
										<g id="Atom/Icon/Sign-Out" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g id="Sign-Out" transform="translate(7.000000, 8.000000)" fill="#000000" fillRule="nonzero">
												<path d="M2.76076853,12.5 L5.75929613,15.1237117 L5.10079152,15.8762883 L0.670747696,12 L5.10079152,8.12371165 L5.75929613,8.87628835 L2.76076853,11.5 L12,11.5 L12,12.5 L2.76076853,12.5 Z" id="Arrow"/>
												<polygon id="Door" points="5.89473684 0.96 21.1052632 0.96 21.1052632 23.04 5.89473684 23.04 5.89473684 18.1517647 5 18.1517647 5 24 22 24 22 0 5 5.32907052e-17 5 5.60759358 5.89473684 5.60759358"/>
											</g>
										</g>
								</svg>
								<p>Sign out</p>
							</Link>
						</div>
			)}
			<div>
				<p>Email</p>
				<input
					value={email}
					onChange={handleChange}
					name="email"
					type="text"
					className="form"
				/>
			</div>
			<div>
				<p>Password</p>
				<input
					value={password}
					onChange={handleChange}
					name="password"
					type="password"
					className="form"
				/>
			</div>
			<div>
				<button onClick={login}>
					Sign in
				</button>
				<Link onClick={login} to="/Profile">Sign in</Link>
			</div>
			<div>
				<p>Don&apos;t have an account? <Link to="/Register">Register{"->"}</Link></p>
			</div>
		</div>
		{auth.isLoggedIn && (
					<div>
						<Link to="/Profile">Profile</Link>
					</div>
		
				// {data && (
				// <div className="text-center p-4">
				// 	<div className="alert">{data}</div>
				// </div>
				// )}
		)}

   </div>
	);
}

export default Login;
