import { useState } from "react";
import "./Menu.css";

export default function Menu() {
	// const [aria, setAria] = useState("");

	// const button = document.querySelector("button");
	// let state = button.ariaPressed;
	// button.addEventListener("click", () => {
	// 	button.ariaPressed = !state;
	// 	state = !button.ariaPressed;
	// });

	return (
		<div className="menu_container" aria-pressed="true">
			<button className="button pb-3" aria-pressed="">
				<span className="sr-only btn__info">Open Menu</span>
				<span className="sr-only btn__info">Close Menu</span>
				<span className="btn__icon icon">
				<span className=""></span>
				<span className=""></span>
				<span className=""></span>
				</span>
			</button>
		</div>
	)
}
