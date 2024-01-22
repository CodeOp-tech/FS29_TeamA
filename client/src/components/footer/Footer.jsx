import { Link } from "react-router-dom";
import Instagram from "../social-media/Instagram";
import X from "../social-media/X";
import Discord from "../social-media/Discord";

export default function Footer() {
  return (
		<footer className="m-10">
			<Link to="/Terms">Terms and Conditions</Link>
			
			<div>
				<Instagram />
				{/* <X />
				<Discord /> */}
			</div>
		</footer>
	)
}
