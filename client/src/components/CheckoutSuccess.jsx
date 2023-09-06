import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckoutSuccess() {
  // use effect PUT  so we update the paid in the DB => backend will get the las inserted id

  useEffect(() => {
    const updateOrderStatus = () => {
      axios(`url`);
    };
  }, []);

  return (
    <div>
      <title>Thanks for your order!</title>

      <h1>Thanks for your order!</h1>
      <p>
        We appreciate your business! If you have any questions, please email
        <a href="mailto:orders@example.com">orders@nft-store.com</a>.
      </p>

      <button>
        <Link to={`/orders`}>Go to Order</Link>
      </button>
    </div>
  );
}
