import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/product/' + id)
            .then(res => res.json())
            .then(data => setSelectedProduct(data));
    }, [id])

    const [userState] = useContext(UserContext);
    const orderDetails = { product: selectedProduct, clientGmail: userState.email, orderTime: new Date() }
    console.log(orderDetails);

    const handleOrderNow = () => {
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your ordered placed successfully!');
                }
            })
    }

    return (
        <div>
            <h3>Name: {selectedProduct.name}</h3>
            <h3>Price: $ {selectedProduct.price}</h3>
            <Link to='/orders'><Button onClick={handleOrderNow} variant="success">Order Now</Button></Link>
        </div>
    );
};

export default Checkout;