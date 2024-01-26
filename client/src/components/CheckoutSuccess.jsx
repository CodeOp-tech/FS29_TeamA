import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function CheckoutSuccess() {
  // const [newOrder, setNewOrder] = useState(null);
  // use effect PATCH so we update the paid in the DB => backend will get the las inserted id

  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  const order_id = useMemo(() => query.get("order_id"), [query]);

  useEffect(() => {
    updateOrderStatus();
  }, []);

  const updateOrderStatus = async () => {
    if (order_id) console.log(order_id);
    try {
      const response = await axios(`/api/orders/ticket/${order_id}`, {
        method: "PATCH",
      });

      if (response.status === 200) {
        const updatedOrder = response.data;
        console.log("Order is now fulfilled");
      } else {
        console.log("Failed to update order status");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className="h-screen p-14 minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px]">

      <h1>Thank you! Your order number is {order_id}!</h1>
      <p>
        We appreciate your business! If you have any questions, please email
        <a href="mailto:orders@example.com" className="text-primary-400"> orders@nft-store.com</a>.
      </p>

      <div className="mx-1 mt-3 w-40 h-10 rounded-full flex justify-center items-center btn font-medium">
        <Link to={`/orders`}>My Orders</Link>
      </div>
    </div>
  );
}
