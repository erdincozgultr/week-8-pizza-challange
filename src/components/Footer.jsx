import "./footer.css";

export default function Footer () {
    return (
        <footer className="footer-section color-white">
            <section className="ft-container width-65">
                 <div className="flex-justify-sb footer-content">
                    <div className="flex-column left-footer">
                    <img src="../images/iteration-2-images/footer/logo-footer.svg"/>
                    <div><img src="../images/iteration-2-images/footer/icons/icon-1.png"/><p>341 Londonderry Road, <br/> Istanbul Türkiye</p></div>
                    <div><img src="../images/iteration-2-images/footer/icons/icon-2.png"/><p>aciktim@teknolojikyemekler.com</p></div>
                    <div><img src="../images/iteration-2-images/footer/icons/icon-3.png"/><p>+90 216 123 45 67</p></div>
                    </div>
                    <div className="flex-column mid-footer">
                    <h5>Sıcacık Menüler</h5>
                    <p>Terminal Pizza</p>
                    <p>5 kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                    </div>
                    <div className="flex-column row-gap-1rem right-footer">
                    <h5>Instagram</h5>
                    <div className="gallery-footer">
                        <img src="../images/iteration-2-images/footer/insta/li-0.png"/>
                        <img src="../images/iteration-2-images/footer/insta/li-1.png"/>
                        <img src="../images/iteration-2-images/footer/insta/li-2.png"/>
                        <img src="../images/iteration-2-images/footer/insta/li-3.png"/>
                        <img src="../images/iteration-2-images/footer/insta/li-4.png"/>
                        <img src="../images/iteration-2-images/footer/insta/li-5.png"/>
                    </div>
                    </div>
                </div>
            </section>
            <div class="container-copyright width-100 color-white">
                <div class="flex-justify-sb width-65"><p>&copy; 2023 Teknolojil Yemekler.</p><i class="fa-brands fa-twitter"></i></div>
            </div>
        </footer>
    )
}