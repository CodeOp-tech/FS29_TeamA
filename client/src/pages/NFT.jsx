import { Link, Outlet } from "react-router-dom";


export default function NFT() {
  return (
    <div className="app-container">
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Products">Product</Link>
            </li>
            <li>
              <Link to="/Page3">Page3</Link>
            </li>
            <li>
              <Link to="/Page4">Page4</Link>
            </li>
          </ul>
          <div>
          <button>
              <Link to="/Login">Account</Link>
          </button>
        </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
