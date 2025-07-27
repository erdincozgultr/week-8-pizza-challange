import "./success.css";
export default function Success({orderData}) {
    const {name, size, dough, orderNote, count, extras, total, ingredians} = orderData;
    return (
        <>
        <div className="order-success">
            <div className="container-size flex-column result-container">
                <p class="stylish color-yellow">lezzetin yolda</p>
                <h1 className="color-white">SİPARİŞ ALINDI</h1>
                <div className="container-size flex-column color-white row-gap-3rem">
                    <h4 className="width-50">{name}</h4>
                    <div className="flex-column row-gap-1rem width-40">
                        <p><span className="small">Boyut: </span>{size}</p>
                        <p><span className="small">Hamur: </span>{dough}</p>
                        <p><span className="small">Ekstra Malzemeler: </span>{ingredians.join(", ")}</p>
                        {orderNote && <p><span className="small">Sipariş Notu: </span>{orderNote}</p>}
                    </div>
                    <div className="width-50 flex-justify-c border">
                        <div className="flex-column width-80 row-gap-1rem">
                            <p>Sipariş Toplamı</p>
                            <div className="flex-justify-sb"><p>Seçimler </p><p>{extras}₺</p></div>
                            <div className="flex-justify-sb"><p>Toplam </p><p>{total}₺</p></div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        </>
    )
}