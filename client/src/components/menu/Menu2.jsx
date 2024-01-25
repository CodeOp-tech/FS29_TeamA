export default function Menu2() {
	return (
		<div className="fixed inset-0 overflow-hidden z-6 minlg:hidden">
			<div className="flex flex-col fixed inset-y-0 right-0 w-screen max-w-full h-full shadow-xl overflow-y-auto overflow-x-hidden bg-white font-noi-grotesk" data-projection-id="25" style={{ transform: "translateX(0%) translateZ(0px);"}}>
				<div className="h-full pt-20 px-6" data-projection-id="26" style={{ transform: "translateX(0%) translateZ(0px);"}}>
					<div className="mt-10 block minlg:hidden">
						<div id="mobile-search" className="flex flex-col font-noi-grotesk  relative false ">
							<div className="flex space-x-2 p-5 py-3 minlg:space-x-0 minlg:p-0 rounded-full bg-[#F8F8F8] false h-[52px]">
								<div className="relative flex items-center w-full text-black">
									<svg width="18" height="18" color="#000000" className="mr-2 shrink-0 aspect-square">
										<path d="M6.683 12.011a5.33 5.33 0 1 1 5.329-5.329 5.335 5.335 0 0 1-5.33 5.33m9.131 2.859-3.976-3.976a6.672 6.672 0 1 0-.942.942l3.976 3.976a.666.666 0 0 0 .942-.942"></path>
									</svg><div className="w-full">
										<input type="search" placeholder="Search profiles and NFTs by name..." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="512" className="w-full text-black text-lg placeholder:text-black bg-inherit border-none p-0 focus:border focus:border-[#F9D54C] focus:ring-0 focus:placeholder:text-[#B2B2B2] transition-[width]" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="border-b border-[#ECECEC]">
						<div>
							<div className="flex items-center justify-between">
								<h2 className="w-full py-6 text-2xl font-medium font-noi-grotesk">Discover</h2>
								<svg width="28" height="1em" fill="black" viewBox="0 0 256 256">
									<rect width="256" height="256" fill="none"></rect>
									<polyline points="208 96 128 176 48 96" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
									</polyline>
								</svg>
							</div>
							<div className="overflow-hidden" data-projection-id="27" style={{height: "0px;"}}>
								<div className="flex flex-col">
									<a href="#">
										<p className="font-medium text-lg pb-3 w-full flex justify-between items-center">NFTs
											<svg width="25" height="1em" fill="black" viewBox="0 0 256 256">
												<rect width="256" height="256" fill="none">
												</rect>
												<polyline points="96 48 176 128 96 208" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
												</polyline>
											</svg>
										</p>
									</a>
									<a href="#">
										<p className="font-medium text-lg pb-3 w-full flex justify-between items-center">Collections
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="1em" fill="black" viewBox="0 0 256 256">
												<rect width="256" height="256" fill="none"></rect>
												<polyline points="96 48 176 128 96 208" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
												</polyline>
											</svg>
										</p>
									</a>
									<a href="#">
										<p className="font-medium text-lg pb-3 w-full flex justify-between items-center">Profiles
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="1em" fill="black" viewBox="0 0 256 256">
												<rect width="256" height="256" fill="none"></rect>
												<polyline points="96 48 176 128 96 208" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
											</svg>
										</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="border-b border-[#ECECEC]">
						<div className="flex items-center justify-between">
							<h2 className="w-full py-6 text-2xl font-medium font-noi-grotesk">Learn</h2>
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="1em" fill="black" viewBox="0 0 256 256">
								<rect width="256" height="256" fill="none"></rect>
								<polyline points="208 96 128 176 48 96" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
								</polyline>
							</svg>
						</div>
						<div className="overflow-hidden" data-projection-id="28" style={{height: "0px"}}>
							<div className="flex flex-col">
								<p className="font-medium text-lg pb-3 w-full flex justify-between items-center hover:cursor-pointer">Docs
									<svg width="25" height="1em" fill="black" viewBox="0 0 256 256">
										<rect width="256" height="256" fill="none"></rect>
										<polyline points="96 48 176 128 96 208" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
									</svg>
								</p>
								<a href="#"><p className="font-medium text-lg pb-3 w-full flex justify-between items-center">Blog
									<svg width="25" height="1em" fill="black" viewBox="0 0 256 256">
										<rect width="256" height="256" fill="none"></rect>
										<polyline points="96 48 176 128 96 208" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
									</svg>
								</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
