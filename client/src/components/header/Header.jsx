import { Link } from "react-router-dom";

// assets
import "./Header.css";


//components
import Logo from "../svg/logo";
import ProfileIcon from "../profileIcon/ProfileIcon";
import CartSvg from "../cart/CartSvg";
import MenuBtn from "../menu/MenuBtn";
// import Menu from "../menu/Menu";

export default function NFT() {

	return (
		<header className="header rounded-full p-1 my-7 mx-auto shadow-lg shadow-indigo-500/40">
			<nav className="px-4 mx-2 max-w-8xl">
				<ul className="text-[1.3rem] h-full minlg:w-[60%]">
						<li>
						{/* <MenuBtn /> */}
						</li>
						<li>
							<Logo/>
						</li>
						<li>
							<div className="align-middle">
								<Link to="/Shop">Shop</Link>
							</div>
						</li>
						<li>
							<div className="align-middle">
								<Link to="/Brands">Brands</Link>
							</div>
						</li>
						<li>
							<div className="align-middle">
							<Link to="/Contact">Contact</Link>
							</div>
						</li>
					</ul>
					<div className="flex gap-1 items-center m-2">
						<ProfileIcon />
						<CartSvg />
					</div>
			</nav>
		</header>
	);
}
