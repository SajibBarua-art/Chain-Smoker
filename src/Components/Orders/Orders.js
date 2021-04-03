import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [userState] = useContext(UserContext);
    const [ordersProduct, setOrdersProduct] = useState([]);
    const email = userState.email;
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/client/' + email)
            .then(res => res.json())
            .then(data => {
                setOrdersProduct(data);
                setIsDataLoading(false);
            })
    }, [email])
    return (
        <div>
            <h3 className='mt-4 ml-2'>All Orders: </h3>
            <div className="container">
                <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex justify-content-center col-3">
                        <h4>Name</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Price</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Net</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Method</h4>
                    </div>
                </div>
            </div>
            {
                isDataLoading && <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            <div className="mb-5">
                {
                    ordersProduct.map(product => <OrderDetails product={product} key={product.orderTime}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default Orders;