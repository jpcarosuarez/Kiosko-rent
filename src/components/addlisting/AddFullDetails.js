import React from 'react';
import { AiOutlineUser, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { BsLink45Deg, BsPencil } from 'react-icons/bs'
import { TiSocialGooglePlus } from 'react-icons/ti'

function AddFullDetails() {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Información de Contacto</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Responsable</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineUser />
                                            </span>
                                            <input className="form-control" type="text" name="name" placeholder="Nombre" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Correo</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <FaRegEnvelope />
                                            </span>
                                            <input className="form-control" type="email" name="email" placeholder="Correo electrónico" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Teléfono Contacto <span className="text-muted"></span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <FiPhone />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="Teléfono Contacto" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Sitio Web <span className="text-muted">(opcional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsLink45Deg />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://kioskoinmobiliario.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Facebook <span className="text-muted">(opcional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineFacebook />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://www.facebook.com/" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Twitter <span className="text-muted">(opcional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineTwitter />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://www.twitter.com/" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Google <span className="text-muted">(opcional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <TiSocialGooglePlus />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://plus.google.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Linkedin <span className="text-muted">(opcional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineLinkedin />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://linkedin.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Descripción</label>
                                        <div className="form-group mb-0">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="message" placeholder="Escribe una breve descripción"></textarea>
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

export default AddFullDetails;
