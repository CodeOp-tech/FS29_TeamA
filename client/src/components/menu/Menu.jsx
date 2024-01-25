import "./Menu.css";

export default function Menu() {
	return (
		<div className="w-20 h-10 bg-primary-100">
			<button className="menu-btn w-15 h-15" aria-pressed="false">
				<span className="sr-only btn__info">Open Menu</span>
				<span className="sr-only btn__info">Close Menu</span>
				<span className="btn__icon icon">
				<span className="w-2 h-1 bg-primary-800 line mr-2 p-0 rounded-full"></span>
				<span className="w-9 h-1 bg-primary-800 line m-0 p-0 rounded-full"></span>
				<span className="w-2 h-1 bg-primary-800 line ml-2 p-0 rounded-full"></span>
				</span>
			</button>
		</div>
	)
}
