import React from 'react';
import {Link} from "react-router-dom";
import {BsGrid, BsListUl} from "react-icons/bs";
import Select from "react-select";

const state = {
    selectedCatOp: null,
    title: 'Mostrando X propiedades',
    navs: [
        {
            path: '/listing-list',
            icon: <BsListUl />,
            active: false,
        },
        {
            path: '/listing-grid',
            icon: <BsGrid />,
            active: true,
        }
    ],
    shortby: [
        {
            value: 0,
            label: 'Filtrar por'
        },
        {
            value: 1,
            label: 'Default'
        },
        {
            value: 2,
            label: 'Mejor evaluados'
        },
        {
            value: 3,
            label: 'Más vistos'
        },
        {
            value: 4,
            label: 'Por orden de visitas'
        },
        {
            value: 5,
            label: 'Publicaciones recientes'
        },
        {
            value: 6,
            label: 'Mas antiguas'
        },
        {
            value: 7,
            label: 'Precio: Ascendente'
        },
        {
            value: 8,
            label: 'Precio: Descendente'
        },

    ]
}

function GenericHeader() {
    return (
        <>
            <div className="generic-header margin-bottom-30px">
                <p className="showing__text text-left">
                    {state.title}
                </p>
                <div className="short-option mr-3">
                    <Select
                        placeholder="Filtrar por "
                        options={state.shortby}
                    />
                </div>
                <ul className="generic-nav">
                    {state.navs.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className={ item.active ? 'active': ' '}>
                                    <span className="d-inline-block">
                                        {item.icon}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default GenericHeader;
