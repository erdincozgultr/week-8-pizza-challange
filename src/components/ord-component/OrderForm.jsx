import "./orderForm.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function OrderForm(props) {
    const {handleSubmit} = props;

    const pizzaBoyutlar = [
        {name: "S",
        label: "S",},
        {name: "M",
        label: "M"},
        {name: "L",
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
    const pizzaMalzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Baton Sucuk", 
        "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"];

    const errorMessages = {
        size: "*",
        dough: "*",
        ingredians: 'En Fazla 10 Malzeme Seçebilirsiniz!',
    };
    const [form, setForm] = useState({
        name: "Position Absolute Pizza",
        size: "",
        dough: "",
        orderNote: "",
        count: "1",
        extras: "0",
        total: "85.5",
        ingredians: []
        });
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({
        size: true,
        dough: true,
        ingredians: false
    });

    useEffect(() => {
        if (form.ingredians.length > 10) {
        setErrors(prevErrors => ({ ...prevErrors, ingredians: true }));
        } else {
        setErrors(prevErrors => ({ ...prevErrors, ingredians: false }));
        }
    }, [form.ingredians]);


    useEffect(() => {
    if (
      errors.dough === false &&
      errors.ingredians === false &&
      errors.size === false
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors]);

    function handlePrice () {
        setForm(prevForm => ({ ...prevForm, extras: (prevForm.ingredians.length * 5) * prevForm.count }));
        setForm(prevForm => ({ ...prevForm, total: (prevForm.extras + (prevForm.count * 85.5)) }));
    }

      function handleSize(event) {
        const {name} = event.target;
        setErrors(prevErrors => ({...prevErrors, size: false}));
        setForm(prevForm => ({...prevForm, size: name}));
        handlePrice();
    }

    function handleCounter(event) {
        const {name} = event.target;
        let pizzaCount = 0;
        if (name === "desc") {
            Number(form.count) < 2 ? pizzaCount = form.count : pizzaCount = Number(form.count) - 1;
            setForm(prevForm => ({ ...prevForm, count: pizzaCount}));
        } else if (name === "incr") {
            pizzaCount = Number(form.count) + 1;
            setForm(prevForm => ({ ...prevForm, count: pizzaCount}));
        }
        handlePrice();
    }

    function handleChange(event) {
        let { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setForm(prevForm => {
                const currentIngredians = prevForm.ingredians;
                if (checked) {
                    if (!currentIngredians.includes(name)) {
                        return { ...prevForm, ingredians: [...currentIngredians, name] };
                    }
                } else {
                    return { ...prevForm, ingredians: currentIngredians.filter(item => item !== name) };
                        }
        return prevForm;
            });
        } else {
            setForm(prevForm => ({ ...prevForm, [name]: value }));
            }        
        name === "dough" && setErrors(prevErrors => ({...prevErrors, dough: false}));
        handlePrice();
    } 


    return (
        <section className='form'>
            <form onSubmit={(event) => handleSubmit(event, isValid, form)}>
                <div className="container-size flex-column form-container">
                    <div className='flex-justify-sb'>
                        <div className='flex-column row-gap-1rem '>
                            <h4 className='flex gap-hrem color-grey'>Boyut Seç<h4 className="color-red">{errors.size && "*" }</h4></h4>
                            <div className="flex-justify-sb gap-1rem">
                                {pizzaBoyutlar.map(boyut => (
                                <button className={form.size === boyut.name ? "pizza-size pizza-size-active" : "pizza-size"} type="button" onClick={handleSize}id={boyut.name} name={boyut.name} data-cy={`button-${boyut.name}`}>{boyut.label}</button>
                            ))}
                            </div>
                        </div>
                        <div className='flex-column row-gap-1rem '>
                            <h4 className='flex  gap-hrem color-grey'>Hamur Seç<h4 className="color-red">{errors.dough && "*" }</h4></h4>
                            <select id="order-input" name="dough" onChange={handleChange}>
                                <option value="" disabled selected hidden>--Hamur Kalınlığı Seç</option>
                                {pizzaHamurlar.map(hamur => (
                                    <>
                                    <option id={hamur.name}>{hamur.label}</option>
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
                                <div className='checkboxes' key={malzeme}>
                                    <label class="cx-container">
                                    <input type="checkbox" name={malzeme} onChange={handleChange} data-cy={`checkbox-${malzeme}`}/>{malzeme}
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.ingredians && <p className="color-red">{errorMessages.ingredians}</p>}
                    </div>
                    <div className='flex-column row-gap-1rem'>
                        <h4 className='color-grey'>Sipariş Notu</h4>
                        <input  id="order-input" name="orderNote" type='text' placeholder='Siparişine eklemek istediğin bir not var mı?' onChange={handleChange} data-cy="input-note"/>
                        <div className='finalize'>
                            <div className='increase'>
                                <button className="size-33" type='button' name="desc" onClick={handleCounter} data-cy="button-desc">-</button>
                                <h4 className="size-33 flex-justify-c" data-cy="pizza-count">{form.count}</h4>
                                <button className="size-33" type='button' name="incr"onClick={handleCounter} data-cy="button-incr">+</button>
                            </div>
                            <div className='flex-column width-100'>
                                <div className='flex-column orderSum row-gap-1rem'>
                                    <h4 className='color-grey'>Sipariş Toplamı</h4>
                                    <div>
                                        <div className='flex-justify-sb color-lgrey'><p>Seçimler</p><p>{form.extras}₺</p></div>
                                        <div className='flex-justify-sb color-red'><p>Toplam</p><p>{form.total}₺</p></div>
                                    </div>
                                </div>
                                <button className='submit' disabled={isValid ? false : true} data-cy="button-submit"><h4>SİPARİŞ VER</h4></button>
                            </div>
                        </div>
                    </div>             
                </div>
            </form>
        </section>
    )
}