export default function MenuBtn() {
	return (
		<button className="block minlg:hidden cursor-pointer z-30 relative mr-4">
			<svg width="28" height="28" fill="black" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none"></rect>
				<line x1="40" y1="128" x2="216" y2="128" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
				<line x1="40" y1="64" x2="216" y2="64" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
				<line x1="40" y1="192" x2="216" y2="192" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
			</svg>
		</button>
	)
}
