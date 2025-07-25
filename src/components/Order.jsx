import React from 'react';
import "./order.css"
export default function Order () {

    const pizzaBoyutlar = [
        {name: "kucuk",
        label: "Küçük"},
        {name: "orta",
        label: "Orta"},
        {name: "buyuk",
        label: "Büyük"}];

    const pizzaHamurlar = [
        {name: "default",
        label: "Hamur Kalınlığı"},
        {name: "cokInce",
        label: "İncecik (Ekstra Kıtır) Hamur"},
        {name: "ince",
        label: "İnce Hamur"},
        {name: "normal",
        label: "Normal Hamur"},
        {name: "mozzarella",
        label: "Mozzarellalı Hamur"},
    ];
    const pizzaMalzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Sucuk", 
        "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"];

    return (<>
        <section className="color-red header">
            <div className="container-size flex-column header-container">
                <img className="logo" src="../images/iteration-1-images/logo.svg"/>
                <div className="width-100 header-nav color-white">
                    <span>Anasayfa - </span>
                    <span>Seçenekler - </span>
                    <span>Sipariş Oluştur</span> 
                </div>
            </div>
        </section>
        <section className='form'>
            <form>
                <div className="container-size flex-column form-container">
                    <h4 className='color-grey'>Position Absolute Pizza</h4>
                    <div className='flex-column row-gap-1rem '>
                        <div className='flex-justify-sb pizzaDetail color-lgrey'><p className='color-grey'>85.50₺</p> <p>4.9</p> <p>(200)</p></div>
                        <p className='color-lgrey'>Frontent Dev olarak position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir, ve 
                        genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta
                        pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
                        yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                    </div>
                    <div className='flex-justify-sb'>
                        <div className='flex-column row-gap-1rem '>
                            <h4 className='color-grey'>Boyut Seç *</h4>
                            {pizzaBoyutlar.map(boyut => (
                                <div><input type="radio" id={boyut.name} name="boyut"/>
                                <label for={boyut.name} className='color-lgrey' >{boyut.label} </label></div>
                            ))}
                        </div>
                        <div className='flex-column row-gap-1rem '>
                            <h4 className='color-grey'>Hamur Seç *</h4>
                            <select id="hamur" name="hamur">
                                {pizzaHamurlar.map(hamur => (
                                    <>
                                    <option name={hamur.name}>{hamur.label}</option>
                                    </>  
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex-column row-gap-1rem'> 
                        <h4 className='color-grey'>Ek Malzemeler</h4>
                        <p className='color-lgrey'>En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
                        <div className='flex-wrap color-lgrey'>
                            {pizzaMalzemeler.map(malzeme => (
                                <div className='checkboxes'>
                                <input type="checkbox" id={malzeme} name={malzeme}/>
                                <label for={malzeme} > {malzeme} </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-column row-gap-1rem'>
                        <h4 className='color-grey'>Sipariş Notu</h4>
                        <input className="width-100" id="order-note" name="order-note" type='text' placeholder='Siparişine eklemek istediğin bir not var mı?'/>
                        <div className='finalize'>
                            <div className='increase'>
                                <button className="size-33" type='button'>-</button>
                                <h4 className="size-33">1</h4>
                                <button className="size-33" type='button'>+</button>
                            </div>
                            <div className='flex-column width-100'>
                                <div className='flex-column orderSum row-gap-1rem'>
                                    <h4 className='color-grey'>Sipariş Toplamı</h4>
                                    <div>
                                        <div className='flex-justify-sb color-lgrey'><p>Seçimler</p><p>25₺</p></div>
                                        <div className='flex-justify-sb color-red'><p>Toplam</p><p>115₺</p></div>
                                    </div>
                                </div>
                                <button className='submit'><h4>SİPARİŞ VER</h4></button>
                            </div>
                        </div>
                    </div>             
                </div>
            </form>
        </section>
    </>)
}