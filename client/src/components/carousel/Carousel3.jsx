import axios from "axios";
import { useState, useEffect } from "react";
import Scroller from "./Scroller.jsx";

import "./Carousel.css";

export default function Carousel3() {
	
	const [productPics, setProductsPics] = useState([]);
	const direction = ["right", "left"]

	useEffect(() => {
		const getPics = async (req, res) => {
		try {
			const callPics = await axios(`/api/products`);

			setProductsPics(callPics.data);
		} catch (error) {
			res.status(500).send(error);
		}};
		getPics();
	}, []);

	const scrollers = document.querySelectorAll(".scroller");

	//If a user hasn't opted in for recuded motion, then we add the animation
	if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		addAnimation();
	}
	
	function addAnimation() {
		scrollers.forEach((scroller) => {
		// add data-animated="true" to every `.scroller` on the page
		scroller.setAttribute("data-animated", true);
	
		// Make an array from the elements within `.scroller-inner`
		const scrollerInner = scroller.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);
	
		// For each item in the array, clone it
		// add aria-hidden to it
		// add it into the `.scroller-inner`
		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		});
		});
	}

	return (
		<>
			<div className="relative">
				<Scroller productPics={productPics} direction={direction[0]} />
				<Scroller productPics={productPics} direction={direction[1]} />
				<Scroller productPics={productPics} direction={direction[0]} />
				<Scroller productPics={productPics} direction={direction[1]}/>
			</div>
		</>
	)
}
