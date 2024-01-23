import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import authContext from "../../context/auth/authContext";
import LogOut from "../../components/svg/LogOut";

export default function Profile() {
  const [user, setUser] = useState(null);
  const auth = useContext(authContext);
  //   console.log(auth);

  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    auth.logout();
  };

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
      <div className="logout mt-10 mr-10">
        <LogOut onClick={logout}/>
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
