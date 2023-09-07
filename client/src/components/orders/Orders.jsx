import React, { useState, useEffect } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [user_id, setUser_id] = useState("");

  console.log(user_id);

  const handleClick = () => {
    if (routeUserId) {
      getOrders(routeUserId);
    }
  };

  // //orderHIstory
  useEffect(() => {
    getOrders();
  }, [user_id]);

  const getUserId = () => {
    const userId = localStorage.getItem("user");
    setUser_id(userId);
    console.log(userId);
  };

  //Group orders
  const groupOrdersByOrderNumber = (orderData) => {
    const groupedOrders = {};
    orderData.forEach((order) => {
      if (!groupedOrders[order.id]) {
        groupedOrders[order.id] = [];
      }
      groupedOrders[order.id].push(order);
    });
    return groupedOrders;
  };

  //fetch order history based on user_id
  const getOrders = async () => {
    getUserId();
    let options = {
      method: "GET",
    };
    try {
      if (user_id) {
        console.log(user_id);
        const response = await fetch(`/api/orders/all/${user_id}`, options);
        const data = await response.json();

        // Group orders by order number
        const groupedOrders = groupOrdersByOrderNumber(data);

        setOrders(groupedOrders);
      }
      //group
    } catch (err) {
      console.log(`network error: ${err.message}`);
    }
  };

  return (
    <div>
      <div className="marquee-animation">
        <h3 className="text-3xl mb-20 mt-0 text-left ml-60 font-bold">
          MY ORDERS
        </h3>
      </div>

      <div className="max-w-screen-xl mx-auto">
        {Object.keys(orders).map((orderNumber) => (
          <div key={orderNumber} className="mb-10">
            <h4 className="text-xl font-semibold mb-2 bg-pink">
              Order Number: {orderNumber}
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-platinum text-left text-s leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-3 bg-platinum text-left text-s leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders[orderNumber].map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-no-wrap text-s leading-5 text-gray-900">
                        {order.total}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-s leading-5 text-gray-900">
                        {new Date(order.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
