import React from 'react';
import { Button } from 'react-bootstrap';

const OrderDetails = ({product}) => {
    return (
        <div className="container">
            <div className="row bg-secondary text-white pt-2 rounded mb-1">
                <div className="col-4">
                    <h4>{product.product.name}</h4>
                </div>
                <div className="col-3">
                    <h4>{product.product.price}</h4>
                </div>
                <div className="col-2">
                    <h4>1</h4>
                </div>
                <div className="col-3">
                    <h4><Button variant="danger">Delete</Button></h4>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;