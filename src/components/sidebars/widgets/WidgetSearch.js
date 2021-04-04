import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Select from 'react-select';

const state = {
    selectedOption: null,
    selectedCatOp: null,
    locations: [
        {
            value: '',
            label: 'Selecciona una ubicación'
        },
        {
            value: 'AF',
            label: 'Bogotá'
        },
        {
            value: 'AX',
            label: 'Medellín'
        },
        {
            value: 'AL',
            label: 'Cali'
        },

    ],
    categories: [
        {
            value: 0,
            label: 'Categoria'
        },
        {
            value: 1,
            label: 'Todas las categorias'
        },
        {
            value: 2,
            label: 'Apartamento'
        },
        {
            value: 3,
            label: 'Apartaestudio'
        },
        {
            value: 4,
            label: 'Casa'
        },
        {
            value: 5,
            label: 'Finca'
        },
        {
            value: 6,
            label: 'Oficina'
        },
        {
            value: 7,
            label: 'Salón o terraza '
        },
        {
            value: 8,
            label: 'Bodega'
        },
        {
            value: 9,
            label: 'Local Comercial'
        },
    ]
}
function WidgetSearch() {
    return (
        <>
            <div className="sidebar-widget">
                <div className="contact-form-action">
                    <form>
                        <div className="form-group">
                            <span className="d-inline-block form-icon">
                                <FiSearch />
                            </span>
                            <input className="form-control" type="text" placeholder="¿Qué estás buscando?" />
                        </div>
                    </form>
                </div>
                <div className="sidebar-option mb-3">
                    <Select
                        placeholder="Selecciona una ciudad"
                        options={state.locations}
                    />
                </div>
                <div className="sidebar-option">
                    <Select
                        placeholder="Selecciona una categoria "
                        options={state.categories}
                    />
                </div>
            </div>
        </>
    );
}

export default WidgetSearch;
