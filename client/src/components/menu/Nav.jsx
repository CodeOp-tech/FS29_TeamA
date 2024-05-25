import { Link } from "react-router-dom";
import './nav.scss';

export default function Nav() {
  return (
    <div className="nav">
        <ul className="body">
            <li>
                <div className="linkContainer align-middler">
                    <Link to="/Shop">Shop</Link>
                </div>
            </li>
			<li>
				<div className="linkContainer align-middle">
					<Link to="/Brands">Brands</Link>
				</div>
			</li>
			<li>
				<div className="linkContainer align-middle">
					<Link to="/Contact">Contact</Link>
				</div>
			</li>
        </ul>
    </div>
  )
}
