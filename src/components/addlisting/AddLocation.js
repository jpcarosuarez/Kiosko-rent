import React, {Component} from 'react';
import { FiMap } from 'react-icons/fi'
import { FaMapSigns } from 'react-icons/fa'
import { BsFileCode } from 'react-icons/bs'
import Select from "react-select";

const cities = {

    ciudad: [
        {
            value: 0,
            label: 'Seleccionar una Ciudad'
        },
        {
            value: 1,
            label: 'Bogotá'
        },
        {
            value: 2,
            label: 'Medellín'
        },
        {
            value: 3,
            label: 'Cali'
        },
        {
            value: 4,
            label: 'Otra Ubicación'
        },
    ]
};

const states = {

    title: 'Agregar Ubicación',
    localidad: [

        {
            value: 0,
            label: 'Selecciona una localidad '
        },
        {
            value: 1,
            label: 'Chapinero'
        },
        {
            value: 2,
            label: 'Usaquén'
        },
        {
            value: 3,
            label: 'El Poblado'
        },
        {
            value: 4,
            label: 'Engativa'
        },
        {
            value: 5,
            label: 'Cedritos'
        },
        {
            value: 6,
            label: 'Centro Medellín'
        },
        {
            value: 7,
            label: 'Centro Cali'
        },
    ]

};







function AddLocation({handleChangeDireccion, handleChangeComplementaria, handleChangeUbicacion, handleChangeCiudad, handleChangeLocalidad, handleChangePostal }) {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">
                        {states.title}
                    </h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Dirección</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <FiMap />
                                            </span>
                                            <input className="form-control" type="text" name="name" placeholder="Ingresar dirección" onChange={handleChangeDireccion}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Información Complementaria</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <FaMapSigns />
                                            </span>
                                            <input className="form-control" type="text" name="name" placeholder="Información Complementaria" onChange={handleChangeComplementaria} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Ciudad</label>
                                        <div className="form-group">
                                            <Select
                                                onChange={handleChangeCiudad}
                                                placeholder="Selecciona una ciudad"
                                                options={cities.ciudad}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Localidad</label>
                                        <div className="form-group">
                                            <Select
                                                onChange={handleChangeLocalidad}
                                                placeholder="Selecciona una Ciudad"
                                                options={states.localidad}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label className="label-text">Barrio </label>
                                    <div className="form-group">
                                        <input
                                            className="form-control" 
                                            type="text" 
                                            name="ubicacion"
                                            placeholder="Barrio"
                                            onChange={handleChangeUbicacion}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">
                                            Codigo Postal
                                        </label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsFileCode />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="Codigo Postal" onChange={handleChangePostal}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default AddLocation;