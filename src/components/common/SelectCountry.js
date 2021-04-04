import React, {Component} from 'react';
import Select from "react-select";

const state = {
    selectedOption: null,
    countries: [
        {
            value: 's',
            label: 'Ubicación'
        },
        {
            value: 'BO',
            label: 'Bogotá'
        },
        {
            value: 'ME',
            label: 'Medellín'
        },
        {
            value: 'CA',
            label: 'Cali'
        },

    ]
}
class SelectCountry extends Component {
    render() {
        return (
            <>
                <Select
                    placeholder="Bogotá"
                    options={state.countries}
                />
            </>
        );
    }
}

export default SelectCountry;
