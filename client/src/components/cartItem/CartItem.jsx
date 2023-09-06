import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/cart/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";

const CartItem = ({item}) => {

	const {addToCart, removeItem, decreaseItem} = useContext(CartContext);

	console.log("this is the item in the CartItem:", item);
	return (
		<li className='CartItem__item'>
			<img src={item.image_1} alt={item.name} />
			<div>
				{console.log(item.price)}
				{item.name}
				({item.quantity}) X 
				{formatCurrency(item.price)}
				= {formatCurrency(item.price * item.quantity)}
			</div>
			<button className='Remove_button' onClick={() => removeItem(item.id)}>
			Remove
			</button>
			<div className="card-btns">
				<button onClick={() => decreaseItem(item)}> - </button>
				<button onClick={() => addToCart(item)}> + </button>
			</div>
		</li>
	);
}
export default CartItem;
