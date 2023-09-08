import axios from "axios";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";



export default function Carousel2({autoSlide=false, autoSlideInterval=3000}) {
	
	const [productPics, setProductsPics] = useState([]);
	const [curr, setCurr] = useState(0);

	
	const prev = () => setCurr(curr => curr === 0 ? productPics.length - 1 : curr - 1);
	const next = () => setCurr(curr => curr === productPics.length - 1 ? 0 : curr + 1);

	useEffect(() => {
		if (!autoSlide) return
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval)
	}, [])

	useEffect(() => {
		const getPics = async (req, res) => {
		try {
			const callPics = await axios(`/api/products`);

			setProductsPics(callPics.data);
		} catch (error) {
			console.error(error);
		}};
		getPics();
	}, []);

	return (
		<>
		<div className="overflow-hidden relative bg-white">
			<div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${curr*100}%)`}}>
			{productPics.map((product) => (
         <img
            key={product.id}
            id={product.id}
            src={product.image_1}
            alt={`Image ${product.name}`}
         />
			))}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button onClick={prev} className="p-1 rounded-full shadow bg-white 80 text-gray-800 hover:bg-white">
					<ChevronLeft size={40}/>
				</button>
				<button onClick={next} className="p-1 rounded-full shadow bg-white 80 text-gray-800 hover:bg-white">
					<ChevronRight size={40}/>
				</button>
			</div>
			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{productPics.map((_, i) => (
						<div key={i} className={`transition-all w-0.5 h-0.5 bg-black rounded-full
						${curr === i ? "p-2" : "bg-opacity-40"}
						`}/>
					))}
				</div>
			</div>

		</div>

		</>
	)
}
