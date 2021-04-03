import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const OrderDetails = ({ product }) => {
    const [isVisible, setIsVisible] = useState(true);
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsVisible(!isVisible);
                }
            })
    }
    return (
        <div className="container">
            {
                isVisible && <div className="row bg-secondary text-white pt-2 rounded mb-1">
                    <div className="d-flex justify-content-center col-3">
                        <h4>{product.product.name}</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>{product.product.price}</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>1</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4><Button variant="danger" onClick={() => { deleteProduct(product._id) }}>Cancel Order</Button></h4>
                    </div>
                </div>
            }
        </div>
    );
};

export default OrderDetails;