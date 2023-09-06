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
        },[]);


        const getUserId=() => {
          const user_id = localStorage.getItem("user")
          setUser_id(user_id)
        }


            //fetch order history based on user_id
        const getOrders = async () => {
           getUserId()
           let options = {
             method: "GET",
        };
        try {
      
        const response = await fetch (`/api/Orders/all/${user_id}`);
        const data = await response.json();

        setOrders(data);
        } catch (err) {
          console.log(`network error: ${err.message}`);
        }
        };





return (
    <div>
        <h3>Orders</h3>
       
        
        <div>
          <table>
            <thead>
            <tr>
              <th>Order Number</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>   
                  <td>{order.id}</td>
                  <td>{order.total}</td>
                  <td>{order.date}</td>
                </tr> 
              ))} 
                
            </tbody>
          </table>
          
          
        </div>       
      
      
      
</div>  

    


)


}

export default Orders;