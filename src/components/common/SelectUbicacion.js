import React, {Component} from 'react';
import Select from "react-select";

const state = {
    selectedOption: null,
    countries: [
        {
            value: '0',
            label: 'Ubicación'
        },
        {
            value: '1',
            label: 'Bogotá'
        },
        {
            value: '2',
            label: 'Medellín'
        },
        {
            value: '3',
            label: 'Cali'
        },

    ]
}
function SelectUbicacion({handleChangeUbicacion}){
    return (
            <>
                <Select
                    placeholder="Bogotá"
                    options={state.countries}
                    onChange={handleChangeUbicacion}
                />
            </>
        );
    
}

export default SelectUbicacion;
