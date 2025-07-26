import "./contentGallery.css";

export default function ContentGallery() {
    return (
        <>
        <div className="flex-justify-sb main-menu-btn">
            <button className="color-grey"><img src="../images/iteration-2-images/icons/1.svg"/>Ramen</button>
            <button className="btn-active color-white"><img src="../images/iteration-2-images/icons/2.svg"/>Pizza</button>
            <button className="color-grey"><img src="../images/iteration-2-images/icons/3.svg"/>Burger</button>
            <button className="color-grey"><img src="../images/iteration-2-images/icons/4.svg"/>French fries</button>
            <button className="color-grey"><img src="../images/iteration-2-images/icons/5.svg"/>Fast food</button>
            <button className="color-grey"><img src="../images/iteration-2-images/icons/6.svg"/>Soft drinks</button>
        </div>
            <div className="flex-justify-sb main-menu-gallery">
            <div className="gallery-items"><img className="width-100" src="../images/iteration-2-images/pictures/food-1.png"/><h5>Terminal Pizza</h5><div className="items-text"><p>4.9</p><p>(200)</p><span className="bold">60₺</span></div></div>
            <div className="gallery-items"><img className="width-100" src="../images/iteration-2-images/pictures/food-2.png"/><h5>Position Abolute Acı Pizza</h5><div className="items-text"><p>4.9</p><p>(928)</p><span className="bold">85₺</span></div></div>
            <div className="gallery-items"><img className="width-100" src="../images/iteration-2-images/pictures/food-3.png"/><h5>usuEffect Tavuklu Burger</h5><div className="items-text"><p>4.9</p><p>(462)</p><span className="bold">75₺</span></div></div>
        </div>
        </>
    )
}