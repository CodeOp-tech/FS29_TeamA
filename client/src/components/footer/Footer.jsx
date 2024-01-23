import { Link } from "react-router-dom";
import Instagram from "../social-media/Instagram";
import X from "../social-media/X";
import Discord from "../social-media/Discord";

export default function Footer() {
	return (
	<footer className="w-screen m-0 overflow-hidden bg-[#282828]">
		<div className="bg-black w-full p-10">
			<div className="w-100 flex justify-between pt-14 pb-10 px-5 minlg:pl-0 minlg:pr-32">

				<div className="min-w-[40%] flex flex-row gap-4 items-center align-middle text-base minlg:pl-14 minlg:pt-[2.35rem]">
					<Instagram />
					{/* <X /> */}
					<Discord />
				</div>
				
					<div className="w-full minlg:w-1/2 grid grid-cols-1 minmd:pb-14">
						<h2 className="font-bold text-primary-100">Policies</h2>
					<Link to="/Terms"className="mt-4 cursor-pointer text-[#8B8B8B] hover:text-white">Terms and Conditions</Link>
				</div>

			</div>

		</div>
	</footer>
	)
}
