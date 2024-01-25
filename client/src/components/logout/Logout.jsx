import { useContext, useEffect, useState } from "react";
import authContext from "../../context/auth/authContext";

export default function LogOut() {
	const [user, setUser] = useState(null);
	const auth = useContext(authContext);
	//console.log(auth);

	useEffect(() => {
		setUser();
	}, []);

	const logout = () => {
		console.log("user is logged out!");
		localStorage.removeItem("token");
		auth.logout();
	};
	return (
		<div className="flex hover:fill-primary-400 hover:text-primary-400" onClick={logout}>
			<div>
				<svg
					width="40px"
					height="40px"
					viewBox="0 0 40 40"
					>
					<g
						id="Sign-Out"
						stroke="none"
						strokeWidth="1"
						fill="none"
						fillRule="evenodd"
					>
						<g
							id="Sign-Out"
							transform="translate(7.000000, 8.000000)"
							fill="#000000"
							fillRule="nonzero"
						>
							<path
							d="M2.76076853,12.5 L5.75929613,15.1237117 L5.10079152,15.8762883 L0.670747696,12 L5.10079152,8.12371165 L5.75929613,8.87628835 L2.76076853,11.5 L12,11.5 L12,12.5 L2.76076853,12.5 Z"
								id="Arrow"
							/>
							<polygon
							id="Door"
							points="5.89473684 0.96 21.1052632 0.96 21.1052632 23.04 5.89473684 23.04 5.89473684 18.1517647 5 18.1517647 5 24 22 24 22 0 5 5.32907052e-17 5 5.60759358 5.89473684 5.60759358"
							/>
						</g>
					</g>
				</svg>
				<span className="sr-only">Sign Out Icon</span>
			</div>

			<div className="m-auto">
				<p className="block">Sign out</p>
			</div>
			
		</div>
	)
}
