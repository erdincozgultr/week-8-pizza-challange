import React from 'react';
import "./banner.css"
export default function Banner () {
    return (<>
        <section className="banner">
            <div className="container">
                <img className="logo" src="../images/iteration-1-images/logo.svg"/>
                <div className="banner-content">
                    <h1>KOD ACIKTIRIR <br/> PIZZA, DOYURUR </h1>
                    <button className="btn">ACIKTIM</button>
                </div>
            </div>
        </section>
    </>)
}