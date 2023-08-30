import { Link, Outlet } from "react-router-dom";
import "./NFT.css";


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
              <Link to="/Products">Products</Link>
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
              <Link to="/Login">
                <svg width="30px" height="30px" viewBox="0 0 48 48">
                  <path d="M0 0h48v48H0z" fill="none"/>
                      <g>
                        <path d="M33.843,26.914L24,36l-9.843-9.086C8.674,30.421,5,36.749,5,44h38C43,36.749,39.326,30.421,33.843,26.914z"/>
                        <path d="M24,28c3.55,0,6.729-1.55,8.926-4C34.831,21.876,36,19.078,36,16c0-6.627-5.373-12-12-12S12,9.373,12,16   c0,3.078,1.169,5.876,3.074,8C17.271,26.45,20.45,28,24,28z"/>
                      </g>
                  </svg>
              </Link>
          </button>
        </div>
        </nav>
      </div>

      <div className="page-conteiner">
        <Outlet />
      </div>

    </div>
  );
}
