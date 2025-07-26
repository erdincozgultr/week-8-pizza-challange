import "./orderForm.css";
export default function OrderForm() {

        const pizzaBoyutlar = [
        {name: "kucuk",
        label: "S"},
        {name: "orta",
        label: "M"},
        {name: "buyuk",
        label: "L"}];

    const pizzaHamurlar = [
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


    return (
        <section className='form'>
            <form>
                <div className="container-size flex-column form-container">
                    <div className='flex-justify-sb'>
                        <div className='flex-column row-gap-1rem '>
                            <h4 className='color-grey'>Boyut Seç *</h4>
                            <div className="flex-justify-sb gap-1rem">
                                {pizzaBoyutlar.map(boyut => (
                                <button type="button" id="boyut">{boyut.label}</button>
                            ))}
                            </div>
                        </div>
                        <div className='flex-column row-gap-1rem '>
                            <h4 className='color-grey'>Hamur Seç *</h4>
                            <select id="order-input" name="hamur">
                                <option value="" disabled selected hidden>--Hamur Kalınlığı Seç</option>
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
                                    <label class="container">
                                    <input type="checkbox" name={malzeme}/>{malzeme}
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-column row-gap-1rem'>
                        <h4 className='color-grey'>Sipariş Notu</h4>
                        <input className="width-100" id="order-input" name="order-note" type='text' placeholder='Siparişine eklemek istediğin bir not var mı?'/>
                        <div className='finalize'>
                            <div className='increase'>
                                <button className="size-33" type='button'>-</button>
                                <h4 className="size-33 flex-justify-c">1</h4>
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
    )
}