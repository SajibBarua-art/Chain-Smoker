import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import './Orders.css';

const Orders = () => {
    const [userState] = useContext(UserContext);
    const [ordersProduct, setOrdersProduct] = useState([]);
    const email = userState.email;
    useEffect(() => {
        fetch('http://localhost:5000/client/' + email)
            .then(res => res.json())
            .then(data => setOrdersProduct(data))
    }, [email])
    return (
        <div>
            <h3>All Orders: </h3>
            <div className="container">
                <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                    <div className="col-4">
                        <h4>Product Name</h4>
                    </div>
                    <div className="col-3">
                        <h4>Price</h4>
                    </div>
                    <div className="col-2">
                        <h4>Quantity</h4>
                    </div>
                    <div className="col-3">
                        <h4>Operation</h4>
                    </div>
                </div>
            </div>
            {
                ordersProduct.map(product => <OrderDetails product={product} key={product.orderTime}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;