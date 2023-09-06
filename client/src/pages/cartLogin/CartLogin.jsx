import "./CartLogin.css";
import { useContext, useState } from "react";
import { useNavigate, Navigate, redirect } from "react-router-dom";
import authContext from "../../context/authContext";
import axios from "axios";

export default function CartLogin() {
  const auth = useContext(authContext);

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    marketing: false,
  });

  const redirectPayment = async () => {
    try {
      const { data } = await axios("/api/stripe/create-checkout-session", {
        method: "POST",
      });

      console.log(data.url);
      window.location.replace(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    auth.login(credentials, redirectPayment);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setCredentials({ ...credentials, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const { data } = await axios("/api/auth/register", {
        method: "POST",
        data: credentials,
      });
      console.log(data.message);
      setCredentials(data.message);
      console.log(credentials);
      redirectPayment();
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  };

  const guest = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const { data } = await axios("/api/auth/guest", {
        method: "POST",
        data: credentials,
      });
      console.log(data.message);
      setCredentials(data.message);
      redirectPayment();
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  };

  return (
    <>
      {auth.isLoggedIn ? (
        { redirectPayment }
      ) : (
        <div id="CartLogin">
          <form id="loginForm" onSubmit={login}>
            <h2>I'm already a user...</h2>

            <label>
              Email
              <input
                value={credentials.email}
                onChange={handleChange}
                name="email"
                type="text"
              />
            </label>

            <label>
              Password
              <input
                value={credentials.password}
                onChange={handleChange}
                name="password"
                type="password"
              />
            </label>

            <button>Log In</button>
          </form>

          <form id="registerForm" onSubmit={register}>
            <h2>I want to become a user...</h2>

            <label>
              Firstname
              <input
                value={credentials.firstname}
                onChange={handleChange}
                name="firstname"
                type="text"
              />
            </label>

            <label>
              Lastname
              <input
                value={credentials.lastname}
                onChange={handleChange}
                name="lastname"
                type="text"
              />
            </label>

            <label>
              Email
              <input
                value={credentials.email}
                onChange={handleChange}
                name="email"
                type="text"
              />
            </label>

            <label>
              Password
              <input
                value={credentials.password}
                onChange={handleChange}
                name="password"
                type="password"
              />
            </label>

            <label>
              I want to receive news via email
              <input
                checked={credentials.marketing}
                onChange={handleChange}
                name="marketing"
                type="checkbox"
                className="checkbox"
              />
            </label>

            <button>Register</button>
          </form>

          <form id="guestForm" onSubmit={guest}>
            <h2>I don't want to become a user...</h2>

            <label>
              Firstname
              <input
                value={credentials.firstname}
                onChange={handleChange}
                name="firstname"
                type="text"
              />
            </label>

            <label>
              Lastname
              <input
                value={credentials.lastname}
                onChange={handleChange}
                name="lastname"
                type="text"
              />
            </label>

            <label>
              Email
              <input
                value={credentials.email}
                onChange={handleChange}
                name="email"
                type="text"
              />
            </label>

            <button>Continue as guest</button>
          </form>

          {/* {auth.isLoggedIn && navigate("/Profile")} */}
        </div>
      )}
    </>
  );
}
