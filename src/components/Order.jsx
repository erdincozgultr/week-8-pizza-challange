import React, { useState } from 'react';
import "./order.css"
import OrderContent from './ord-component/OrderContent';
import Footer from './hm-component/Footer';
import OrderForm from './ord-component/OrderForm';
import Succes from "./Success";
import axios from 'axios';
export default function Order () {

    const [orderIsValid, setOrderIsValid] = useState(false);
    const [orderData, setOrderData] = useState({});

    const handleSubmit = (event, isValid, data) => {
    const url = 'https://reqres.in/api/pizza';
    const headers = {
    'x-api-key': 'reqres-free-v1',
    'Content-Type': 'application/json'
     };
    event.preventDefault();
    if (isValid) {
        axios.post(url, data, { headers: headers })
        .then(response => {
            setOrderData(response.data);
            setOrderIsValid(isValid);
        })
        .catch(error => console.log(error));
    }
}

    return (   <>
            <section className="color-red header">
                <div className="container-size flex-column header-container">
                    <img className="logo" src="../images/iteration-1-images/logo.svg" alt="Logo"/>
                </div>
            </section>
            {orderIsValid ? (
                <Succes orderData={orderData}/>
            ) : (
                <>
                    <OrderContent/>
                    <OrderForm handleSubmit={handleSubmit}/>
                    <Footer/>
                </>
            )}
        </>
    );
}