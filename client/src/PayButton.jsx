import axios from "axios";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";





const PayButton = ({}) => {
    const handleCheckout =() => {

    }
    return (
        <div>
            <button onClick={() => handleCheckout()}>
                <Link to="/checkout-success">Check Out</Link>
            </button>
        </div>
    );
};

export default PayButton;
