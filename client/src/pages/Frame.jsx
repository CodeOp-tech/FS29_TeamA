import { Link, Outlet } from "react-router-dom";

export default function Frame() {
	return (
		<div className="app-container">
			<div className="header">
				<nav>
					<ul>
						<li>
							<Link to="/">
								Page1
							</Link>
						</li>
						<li>
							<Link to="/Page2">
								Page2
							</Link>
						</li>
						<li>
							<Link to="/Page3">
								Page3
							</Link>
						</li>
						<li>
							<Link to="/Page4">
								Page4
							</Link>
						</li>
					</ul>
				</nav>

				<div>
					{/* Cart , Login and Log Out */}
				</div>
			</div>

			<Outlet />

		</div>
	)
}
