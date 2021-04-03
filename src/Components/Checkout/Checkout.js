import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch('https://chain-smoker.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => {
                setSelectedProduct(data);
                setIsDataLoading(false);
            });
    }, [id])

    const [userState] = useContext(UserContext);
    const orderDetails = { product: selectedProduct, clientGmail: userState.email, orderTime: new Date() }
    console.log(orderDetails);

    const handleOrderNow = () => {
        fetch('https://chain-smoker.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
    }

    return (
        <div>
            {
                isDataLoading && <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            {
                !isDataLoading && <div className="d-flex justify-content-center">
                    <div className='order-details'>
                        <div className="d-flex justify-content-center">
                            <img src={selectedProduct.img} alt="" />
                        </div>
                        <h3>Product Name: {selectedProduct.name}</h3>
                        <h3>Price: $ {selectedProduct.price}</h3>
                        <h3>Quantity(packet): 1</h3>
                        <div className='d-flex justify-content-end'>
                            <Link to='/orders'><Button onClick={handleOrderNow} variant="success">Order Now</Button></Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Checkout;