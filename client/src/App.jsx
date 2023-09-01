import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import authContext from "./context/AuthContext";
import cartContext from "./context/cartContext";
import axios from "axios";

//Components
import PrivateRoute from "./components/PrivateRoute.jsx";

// Routes and pages
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [cart, setCart] = useState([]);

  const login = async (user) => {
    try {
			const { data } = await axios("api/auth/login", {
			method: "POST",
			data: user,
		});
		//store it locally
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
		} catch (error) {
		console.log(error);
		}
  };

  const logout = () => {
    console.log("user is logged out!")
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const authContentextObject ={
    isLoggedIn,
    login,
    logout
  };

  return (
    <>
    <authContext.Provider value={authContentextObject}>
        <Routes>
          {/* general route with content that's displayed on all pages */}
          <Route path="/" element={<NFT />}>
            {/* all page routes go here */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Shop/:id" element={<Product />} />
            <Route path="/Brands" element={<Brands />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route 
              path="/Profile" 
              element={<PrivateRoute><Profile /></PrivateRoute>}
            />
            <Route path="/Register" element={<Register />} />
            {/* <cartContext.Provider value={cart}>
              <Route path="/Cart" element={<Cart />} />
            </cartContext.Provider> */}
          </Route>
        </Routes>
    </authContext.Provider>
    </>
  );
}

export default App;
