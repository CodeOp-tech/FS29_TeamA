import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//assets
import authContext from "../../context/auth/authContext";

//components
import LogOut from "../../components/logout/logout";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios("/api/auth/profile", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen m-14 pt-20">
      <div className="logout mt-10 mr-10 cursor-pointer">
        <LogOut />
      </div>

      {user && (
        <div>
          <h3>Welcome back {user.firstname}!</h3>

          <p>User: {user.email}&apos;s profile</p>


          <div className="mt-14 rounded-full bg-gradient-to-r from-primary-400 to-primary-800 w-40 h-10 flex justify-center items-center">
            <Link to="/Orders"> View orders</Link>
          </div>
        </div>
      )}
    </div>
  );
}
