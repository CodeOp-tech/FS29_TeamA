import React, { useState, useEffect } from 'react';





function Orders () {

     

        const [orders, setOrders] = useState([]);
        const [user_id, setUser_id] = useState("");
     
        console.log(user_id);
        
      
        const handleClick = () => {
          if (routeUserId) {
            getOrders(routeUserId);
          }
        };

        // //orderHIstory
        useEffect (() => {
         
          getOrders();
        },[user_id]);


        const getUserId=() => {
          const userId = localStorage.getItem("user")
          setUser_id(userId)
          console.log(userId)
        }


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
           getUserId()
           let options = {
             method: "GET",
        };
        try {
          if (user_id) {
            console.log(user_id)
            const response = await fetch (`/api/Orders/all/${user_id}`, options);
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
    <div style={{marginTop: "100px"}}>
        <h3>Orders</h3>
       
        
       <div>
        {Object.keys(orders).map((orderNumber) => (
          <div key={orderNumber}>
            <h4>Order Number: {orderNumber}</h4>
            <table>
              <thead>
                <tr>
                  <th>Cost</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders[orderNumber].map((order) => (
                  <tr key={order.id}>
                    <td>{order.total}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      
      
      
</div>  

    


)


}

export default Orders;