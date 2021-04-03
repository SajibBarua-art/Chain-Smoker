import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useForm } from "react-hook-form";
const axios = require('axios').default;

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        const productData = {
            name: data.name,
            img: imageURL,
            price: data.price
        };
        console.log("product Data", productData);

        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '627706977070f1459448d21e74150c37');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <form className='d-flex justify-content-center flex-wrap' onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Product Name" {...register("name")} />
                <br />
                <input name="price" defaultValue="Product Price" {...register("price")} />
                <br />
                <input {...register("picture")} type="file" name="picture" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;