import React from 'react';
import "./banner.css"
import {
  Link
} from "react-router-dom";
export default function Banner () {
    return (<>
        <section className="banner">
            <div className="flex-column row-gap-1rem container">
                <img className="logo" src="../images/iteration-1-images/logo.svg"/>
                <div className="flex-column banner-content">
                    <p class="stylish color-yellow">fırsatı kaçırma</p>
                    <h1 className='color-white'>KOD ACIKTIRIR <br/> PIZZA, DOYURUR </h1>
                    <Link to="/order"><button className="color-grey btn">ACIKTIM</button></Link>
                </div>
            </div>
        </section>
    </>)
}