import "./orderContent.css";
export default function OrderContent () {
    return (
        <div className="width-100 bcolor-bej color-grey">
            <div className="flex-column row-gap-3rem container-size order-content">
                <div className="img-cut"><img src="../images/iteration-2-images/pictures/form-banner.png"/></div>
                <div className="header-nav color-lgrey">
                    <span>Anasayfa - </span>
                    <span>Seçenekler - </span>
                    <span className="color-red">Sipariş Oluştur</span> 
                </div>
                <h4 className='color-grey'>Position Absolute Pizza</h4>
                <div className='flex-column row-gap-1rem '>
                    <div className='flex-justify-sb pizzaDetail color-lgrey'><p className='color-grey'>85.50₺</p> <p>4.9</p> <p>(200)</p></div>
                    <p className='color-lgrey'>Frontent Dev olarak position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir, ve 
                    genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta
                    pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
                    yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
            </div>
        </div>

    )
}