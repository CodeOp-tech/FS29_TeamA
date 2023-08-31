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
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Brands">Brands</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
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
          <button>
            <Link to="/Cart">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0">
                </g>
                  <g strokeLinecap="round" strokeLinejoin="round">
                  </g>
                <g>
                  <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  </path>
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
