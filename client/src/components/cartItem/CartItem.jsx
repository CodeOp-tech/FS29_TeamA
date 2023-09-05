import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/cart/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";

const CartItem = ({item}) => {
	const {removeItem} = useContext(CartContext);
	console.log(item);
	return (
		<li className='CartItem__item'>
			<img src={item.image_1} alt={item.name} />
			<div>
				{console.log(item.price)}
				{item.name}
				{formatCurrency(+item.price)}
			</div>
			<button className='Remove_button' onClick={() => removeItem(item.id)}>
			Remove
			</button>
		</li>
	);
}
export default CartItem;
