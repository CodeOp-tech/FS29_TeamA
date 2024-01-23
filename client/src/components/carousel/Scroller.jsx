import "./Carousel.css";

export default function Scroller({ productPics, direction}) {
	return (
		<div className="relative scroller" data-direction={ direction } data-speed="slow">
			<div className="w-40 tag-list scroller__inner">
			{productPics.map((product) => (
			<img
				key={product.id}
				id={product.id}
				src={product.image_1}
				alt={`Image ${product.name}`}
				className="bg-white w-36 object-cover"
			/>
			))}
			</div>
		</div>
	)
}
