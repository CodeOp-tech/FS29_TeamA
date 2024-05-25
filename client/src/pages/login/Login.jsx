import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import "./Login.css";

//components
import LoginForm from "../../components/loginForm/LoginForm";

function Login() {

  const navigate = useNavigate();

  const auth = useContext(authContext);
  console.log(auth);


  return (
    <div className="h-screen p-14 minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px]">
      <LoginForm/>
      {auth.isLoggedIn && navigate("/Profile")}
    </div>
  );
}

export default Login;
