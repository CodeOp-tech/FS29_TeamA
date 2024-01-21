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
    <div className="h-screen p-14 minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px]">
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
                <button className="text-neutral-100 bg-gradient-to-r from-primary-400 to-primary-800 focus:ring-4 focus:outline-none focus:bg-primary-400 font-medium text-md w-full sm:w-auto px-6 py-3 text-center rounded-full" onClick={login}>
                  Sign In
                </button>
              </div>
            </div>

            <div className="form-footer">
              <Link className="visited:text-primary-900"to="/Register">Register here!</Link>
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
