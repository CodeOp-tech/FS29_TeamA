import React, { useState } from 'react';




function Orders () {

        const [showContent, setShowContent] = useState(false);
        const [showMyDetails, setShowMyDetails] = useState(false);
      
        const handleClick = () => {
          setShowContent(!showContent);
        };
        const handleMyDetailsClick = () => {
            setShowMyDetails(!showMyDetails);
          };

return (
    <div>
        <h3>Orders</h3>
        <button onClick={handleClick}>My Orders</button>
        {showContent && (
        <div>

          <p>Month</p>
          <p>Order Number</p>
          <p>Cost</p>
          <p>Date</p>
          
        </div>       
      )}
      
        <button onClick={handleMyDetailsClick}>My Details</button>
        {showMyDetails && (
        <div>

          <p>Name</p>
          <p>Email</p>
          <p>Address</p>
          <p>Setting</p>

        </div>

      )}
</div>  

    


)


}

export default Orders;