import React from 'react';

const state = {
    items: [
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
            title: 'Internet Wifi'
        },
        {
            id: 4,
            title: 'Rampa Discapacitados'
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
    ]
}
function Amenities() {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Servicios</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">

                    {state.items.map(item => {
                        return (
                            <div className="custom-checkbox" key={item.id}>
                                <input type="checkbox" id={'chb'+item.id} />
                                <label htmlFor={'chb'+item.id}> {item.title}</label>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default Amenities;
