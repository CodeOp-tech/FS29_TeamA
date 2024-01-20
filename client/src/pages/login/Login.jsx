import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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

  const logout = () => {
    auth.logout();
  };

  return (
    <div className="p-2 minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px]">
      <div className="pt-3">
        <div className="login-form">
          <div className="login-form-inner">
            <h1 className="loginTitle">Login</h1>
            <div className="loginForm">
              <div className="email">
                <input
                  value={email}
                  onChange={handleChange}
                  name="email"
                  type="text"
                  className="form"
                  required
                  placeholder="email address"
                />
              </div>
              <div className="password">
                <input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="form"
                  required
                  placeholder="password"
                />
              </div>
              <div>
                <button className="signIn" onClick={login}>
                  Sign In
                </button>
              </div>
            </div>

            <div className="form-footer">
              <Link to="/Register">Register here!</Link>
              <Link to="/PasswordReset">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
      {auth.isLoggedIn && navigate("/Profile")}
    </div>
  );
}

export default Login;
