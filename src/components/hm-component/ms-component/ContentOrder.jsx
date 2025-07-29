import "./contentOrder.css";
import {
  Link
} from "react-router-dom";
export default function ContentOrder () {
    return (
        <div className="main-content">
            <div className="width-50 leftbar">
                <img className="width-100 heigth-100" src="../images/iteration-2-images/cta/kart-1.png"/>
                <div className="absolute-content">
                    <h2 className="color-white">Özel <br/> Lezzetus</h2>
                    <p className="color-white">Position:Absolute Acı Burger</p>
                    <Link to="/order"><button className="color-red btn" data-cy="button-absolute">SİPARİŞ VER</button></Link>
                </div>
            </div>
            <div className="flex-column flex-justify-sb width-50 rightbar">
                <div className="absolute-content">
                    <img className="width-100 heigth-100" src="../images/iteration-2-images/cta/kart-2.png"/>
                    <div className="flex-column">
                    <h4 className="color-white">Hackathlon <br/> Burger Menü</h4>
                    <Link to="/order"><button className="color-red btn" data-cy="button-hackathlon">SİPARİŞ VER</button></Link>
                    </div>
                </div>
                <div className="absolute-content">
                    <img className="width-100 heigth-100" src="../images/iteration-2-images/cta/kart-3.png"/>
                    <div className="flex-column">
                    <h4><span className="color-red">Çoooook</span> hızlı <br/> npm gibi kurye</h4>
                    <Link to="/order"><button className="color-red btn" data-cy="button-nmp">SİPARİŞ VER</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}