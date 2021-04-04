import React from 'react'
import  { FiSearch } from 'react-icons/fi'
import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";


const state = {
    selectedCatOp: null,
    categories: [
        {
            value: 0,
            label: 'Todos los espacios'
        },
        {
            value: 1,
            label: 'Apartamentos'
        },
        {
            value: 2,
            label: 'Apartaestudios'
        },
        {
            value: 3,
            label: 'Casas'
        },
        {
            value: 4,
            label: 'Oficinas'
        },
        {
            value: 5,
            label: 'Locales'
        },
        {
            value: 6,
            label: 'Fincas'
        },
        {
            value: 7,
            label: 'Bodegas'
        },
        {
            value: 8,
            label: 'Lotes'
        },
        {
            value: 9,
            label: 'Parqueaderos'
        },
        {
            value: 10,
            label: 'Terrazas'
        }
    ]
}
export default function BannerOneSearchInput() {
    return (
        <>
            <div className="main-search-input">

                <div className="main-search-input-item">
                    <div className="contact-form-action">
                        <form action="#">
                            <div className="form-group mb-0">
                            <span className="form-icon">
                                <FiSearch/>
                            </span>
                                <input className="form-control" type="text"
                                       placeholder="Apartamento en Chapinero"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="main-search-input-item location">
                    <SelectCountry />
                </div>

                <div className="main-search-input-item category">
                    <Select
                        placeholder="Apartamento"
                        options={state.categories}
                    />
                </div>

                <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Buscar</button>
                </div>

            </div>
        </>
    )
}
