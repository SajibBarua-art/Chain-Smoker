import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useForm } from "react-hook-form";
import './AddProduct.css';
const axios = require('axios').default;

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [isImageUpload, setIsImageUpload] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            img: imageURL,
            price: data.price
        };

        fetch('https://chain-smoker.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                if(res) {
                    alert('Your submit product is added to the shop.')
                }
            })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '627706977070f1459448d21e74150c37');
        imageData.append('image', event.target.files[0]);

        setLoadingSpinner(true);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                setIMageURL(response.data.data.display_url);
                setLoadingSpinner(false);
                setIsImageUpload(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 className='my-3 ml-2'>Add a product: </h3>
            <h4 className="mt-3 mb-1 mx-5 p-2 rounded bg-warning">To get "Submit" button, you have to choose a image file first!</h4>
            <form className='d-flex justify-content-center flex-wrap form-style' onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Product Name" {...register("name")} />
                <br />
                <input name="price" defaultValue="Product Price" {...register("price")} />
                <br />
                <div className='choose-image'>
                    <h5 className='p-2'>Add a Image file below: </h5>
                    <input {...register("picture")} type="file" name="picture" onChange={handleImageUpload} />
                </div>
                <br />
                {
                    loadingSpinner && <div className="d-flex justify-content-center my-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                }
                <br/>
                {isImageUpload && <input className='btn btn-success' type="submit" />}
            </form>
        </div>
    );
};

export default AddProduct;