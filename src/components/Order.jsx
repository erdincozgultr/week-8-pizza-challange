import React from 'react';
import "./order.css"
import OrderContent from './ord-component/OrderContent';
import Footer from './Footer';
import OrderForm from './ord-component/OrderForm';
export default function Order () {

    return (<>
        <section className="color-red header">
            <div className="container-size flex-column header-container">
                <img className="logo" src="../images/iteration-1-images/logo.svg"/>
            </div>
        </section>
        <OrderContent/>
        <OrderForm/>
        <Footer/>
    </>)
}