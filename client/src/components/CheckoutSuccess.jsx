import {Link} from "react-router-dom";





export default function CheckoutSuccess () {

    

    return (
       

    <div>
   <title>Thanks for your order!</title>
  
    <h1>Thanks for your order!</h1>
    <p>
      We appreciate your business!
      If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
    </p>

    <button>
      <Link to={`/orders`}>Go to Order</Link>
    </button>

    </div>


    )
}

