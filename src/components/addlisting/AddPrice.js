import React from 'react';
import { AiOutlineTags } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import { BsPencil, BsQuestion } from 'react-icons/bs'

function AddPrice(handleChangeAdministracion, handleChangeMatricula, handleChangePrecio, handleChangeNegocio) {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Precio y Condiciones</h3>
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
                                            <input className="form-control" type="text" placeholder="750000" onChange={handleChangePrecio}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <div className="form-group">
                                            <input className="custom-checkbox" type="checkbox" onChange={handleChangeAdministracion}/>
                                            <label className="custom-checkbox">Administración de P.H. incluida en el precio </label>
                                            
                                        </div>
                                    </div>
                                </div>                              
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Información del negocio</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="message" placeholder="Precio Negociable, Conversable, 3 primeros meses con descuento.. etc.." onChange={handleChangeNegocio}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <div className="form-group">
                                            <input className="custom-checkbox" type="checkbox" onChange={handleChangeAdministracion}/>
                                            <label className="label-text custom-checkbox">Pre-Consignar Inmueble</label>                                          
                                            <BsPencil />
                                            <div className="form-group">
                                                <label className="label-text">Administracion integral de Inmueble en Exclusividad</label>
                                                <p>Publicación GRATIS</p>
                                                <p>Inmueble Certificado</p>
                                                <p>Visitas guiadas y presentacion de inmueble a interesados</p>
                                                <p>Fotografias del inmueble</p>
                                                <p>Ventanero si es necesario</p>
                                                <p>Atención a Inquilinos durante el arriendo </p>
                                                <p>Tecnicos especializados</p>                                                                                                                                      
                                            </div>                                          
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

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPrice;
