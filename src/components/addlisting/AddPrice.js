import React from 'react';
import { AiOutlineTags } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { FaDollarSign } from 'react-icons/fa'
import { BsPencil, BsPencilSquare, BsQuestion } from 'react-icons/bs'

function AddPrice(handleChangeAdministracion, handleChangeMatricula, handleChangePrecio, handleChangeNegocio) {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Precio</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Precio</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <FaDollarSign />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="$......" onChange={handleChangePrecio}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <div className="form-group">
                                            <label className="label-text">Administración incluida en el precio</label>
                                            <input className="form-control" type="checkbox" id="administracion" onChange={handleChangeAdministracion}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text d-flex align-items-center ">Matricula Inmobiliaria
                                            <i className="la tip ml-1" data-toggle="tooltip" data-placement="top" title="Administramos y vendemos inmuebles con nuestros agentes aliados.">
                                                <BsQuestion />
                                            </i>
                                        </label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineTags />
                                            </span>
                                            <input className="form-control" type="text" name="matricula" placeholder="Solo si deseas que administremos íntegramente el inmueble." onChange={handleChangeMatricula} />
                                        </div>
                                    </div>
                                </div>




                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Información del negocio</label>
                                        <div className="form-group mb-0">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="message" placeholder="Precio Negociable, Conversable, 3 primeros meses con descuento.. etc.." onChange={handleChangeNegocio}></textarea>
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

export default AddPrice;
