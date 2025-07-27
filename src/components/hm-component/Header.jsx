import "./header.css";

export default function Header() {
    return (
        <header class="menu width-100">
            <nav class="flex-justify-sb menu-content width-65">
            <a className="color-grey" href="#"><img src="../images/iteration-2-images/icons/1.svg"/><p>YENİ! Kore</p></a>        
            <a className="color-grey" href="#"><img src="../images/iteration-2-images/icons/2.svg"/><p>Pizza</p></a>
            <a className="color-grey" href="#"><img src="../images/iteration-2-images/icons/3.svg"/><p>Burger</p></a>
            <a className="color-grey" href="#"><img src="../images/iteration-2-images/icons/4.svg"/><p>Kızartmalar</p></a>
            <a className="color-grey" href="#"><img src="../images/iteration-2-images/icons/5.svg"/><p>Fast food</p></a>
            <a className="color-grey" href="#"><img src="../images/iteration-2-images/icons/6.svg"/><p>Gazlı İçecek</p></a>
            </nav>
        </header>
    )
}