import { Link } from "react-router-dom";
import {useState} from 'react';

// assets
import "./Header.css";
// import styles from './style.module.scss';


//components
import Logo from "../svg/logo";
import ProfileIcon from "../profileIcon/ProfileIcon";
import CartSvg from "../cart/CartSvg";
import MenuBtn from "../menu/MenuBtn";
import Nav from '../menu/Nav';
import { AnimatePresence, motion } from 'framer-motion';
// import Menu from "../menu/Menu";
import '../menu/menu.scss';
import '../menu/menuBtn.scss';
import '../menu/nav.scss';

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}


export default function Header() {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className="fixed menu lg:hidden md:left-[28px] left-[22px] w-full min-w-screen min-h-screen overflow-hidde">
				<motion.div 
					className="menuBody bg-primary-400 px-4"
					variants={menu}
					animate={isActive ? "open" : "closed"}
					initial="closed"
				>
					<AnimatePresence>
						{isActive && <Nav className="m-12"/>}
					</AnimatePresence>
				</motion.div>
			</div>
		<header className="header rounded-full p-1 my-7 mx-auto shadow-lg shadow-indigo-500/40">
			<nav className="px-4 mx-2 max-w-8xl">
				<ul className="text-[1.3rem] h-full minlg:w-[60%]">
						<li className="px-10 block lg:hidden">
						<MenuBtn className="bg-primary-400 px-4" isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
						</li>
						<li className="px-2">
							<Logo/>
						</li>
						<li className="px-5 lg:block hidden m-auto">
							<div className="">
								<Link to="/Shop">Shop</Link>
							</div>
						</li>
						<li className="px-5 lg:block hidden m-auto">
							<div className="align-middle">
								<Link to="/Brands">Brands</Link>
							</div>
						</li>
						<li className="px-5 lg:block hidden m-auto">
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
		</>
	);
}
