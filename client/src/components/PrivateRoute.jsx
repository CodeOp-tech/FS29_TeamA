import { useContext } from "react";
import authContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
	const auth = useContext(authContext);

	return (
		auth.isLoggedIn ? children : <Navigate to="/Login"/>
	)
}
