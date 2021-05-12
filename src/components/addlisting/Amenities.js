import React from 'react';

const state = {
    items: [
        {
            id:0,
            title:'Sin Amoblar'
        },
        {
            id: 1,
            title: 'Totalmente Amoblado'
        },
        {
            id: 2,
            title: 'Ascensor'
        },
        {
            id: 3,
            title: 'Internet | Wifi'
        },
        {
            id: 4,
            title: 'Servicios Publicos'
        },
        {
            id: 5,
            title: 'Lavadora y/o Lavanderia'
        },
        {
            id: 6,
            title: 'Alarmas'
        },
        {
            id: 7,
            title: 'Permitido Fumar'
        },
        {
            id: 8,
            title: 'Parqueadero gratuito'
        },
        {
            id: 9,
            title: 'Homeoffice-Friendly'
        },
        {
            id: 10,
            title: 'Cocina'
        },
        {
            id: 11,
            title: 'Netflix'
        },
        {
            id: 12,
            title: 'Bicicletero'
        },
        {
            id: 13,
            title: 'Teléfono'
        },
        {
            id: 14,
            title: 'Incluye Parqueadero'
        },
        {
            id: 15,
            title: 'Parqueadero Visitas'
        },
        {
            id: 16,
            title: 'Parqueadero Visitas'
        },
        {
            id: 17,
            title: 'Zona Residencial'
        },
        {
            id: 18,
            title: 'Zona Comercial'
        },        
        {
            id: 19,
            title: 'Sobre vía principal'
        },        {
            id: 20,
            title: 'Parques Cercanos'
        },        {
            id: 21,
            title: 'Zona Residencial'
        },
    ]
}

function Amenities({handleChangeCaracteristicas}) {

    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Caracteristicas</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">

                    {state.items.map(item => {
                        return (
                            <div className="custom-checkbox" key={item.id} >
                                <input type="checkbox" id={'chb'+item.id} data-id={item.id} onChange={handleChangeCaracteristicas} />
                                <label htmlFor={'chb'+item.id} > {item.title}</label>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default Amenities;
