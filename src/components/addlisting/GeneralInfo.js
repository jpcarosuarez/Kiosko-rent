import React from 'react';
import { BsPencilSquare, BsQuestion, BsPencil } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import Select from "react-select";

const state = {
    title: 'Información general',
    selectedCatOp: null,
    categories: [
        {
            value: 0,
            label: 'Categoria'
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
function GeneralInfo({handleChangeTitulo, handleChangeHashtags,handleChangeDescripcion}) {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">{state.title}</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Titulo de la Publicación</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencilSquare />
                                            </span>
                                            <input className="form-control" type="text" name="txtTitulo" placeholder="Ingresa el titulo" onChange={handleChangeTitulo}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text d-flex align-items-center ">Hashtags - Palabras relacionadas con su negocio
                                            <i className="la tip ml-1" data-toggle="tooltip" data-placement="top" title="Máximo de 15 palabras clave relacionadas con su negocio">
                                                <BsQuestion />
                                            </i>
                                        </label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineTags />
                                            </span>
                                            <input className="form-control" type="text" name="txtHashtags" placeholder="Las palabras clave deben estar separadas por comas." onChange={handleChangeHashtags} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Descripción</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="txtDescripcion" placeholder="Escriba la descripción de su publicación" onChange={handleChangeDescripcion}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Categoria</label>
                                        <div className="form-group mb-0">
                                            <Select
                                                placeholder="Selecciona una Categoria"
                                                options={state.categories}
                                            />
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

export default GeneralInfo;
