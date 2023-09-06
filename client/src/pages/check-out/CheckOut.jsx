import { useContext } from 'react';
import StripeCheckOutButton from '../../components/StripeCheckOutBtn';
import CartContext from "../../context/cart/CartContext";

// import CheckoutItem from '../../components/cartItem/CartItem';
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../../components/cartItem/CartItem";


// const {cartItem, idx} = CheckoutItem;


const CheckoutPage = () => {
	// const { cartItems, totalCost } = useContext(CartContext);
	const {cartItems} = useContext(CartContext);

	const totalCost = cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0);

	return (
   <div className="checkout-page">
      {/* <div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
      </div> */}
		{/* {cartItems.map((cartItem, idx) => (
        <CheckoutItem key={idx} cartItem={cartItem}></CheckoutItem>
      ))} */}
		{/* {cartItems.map((cartItem, idx) => (
			<p key={idx}>{cartItem = {cartItem}}</p>
		))} */}
		<div>
			<div>
				<ul>
					{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
					))}
				</ul>
			</div>
			<div className="cartTotal" style={{ marginLeft: 5 }}>
            {formatCurrency(totalCost)}
            </div>
		</div>

      <div className="test-warning">
        *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
      </div>
		
      <button to={StripeCheckOutButton(totalCost)}/>
    </div>
  )
}

export default CheckoutPage;
