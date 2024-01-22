import "./Menu.css";

export default function Menu() {
	return (
		<div className="w-20 h-10 bg-primary-100">
			<button className="menu-btn" aria-pressed="false">
				<span className="sr-only btn__info">Open Menu</span>
				<span className="sr-only btn__info">Close Menu</span>
				<span className="btn__icon icon">
				<span className=""></span>
				<span></span>
				<span></span>
				</span>
			</button>
		</div>
	)
}
