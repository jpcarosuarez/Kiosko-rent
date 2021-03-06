import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import {Link} from "react-router-dom";
import payment1 from '../../../assets/images/payment-img.png'
import payment2 from '../../../assets/images/paypal.png'

const state = {
    paymentImg: payment1,
    paypalImg: payment2,
}
function PersonalInfo() {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Datos Personales</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Nombres</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><AiOutlineUser /></span>
                                            <input className="form-control" type="text" name="text" placeholder="Nombres" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Apellidos</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><AiOutlineUser /></span>
                                            <input className="form-control" type="text" name="text" placeholder="Apellidos" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Correo</label>
                                        <div className="form-group mb-0">
                                            <span className="la form-icon"><FaRegEnvelope /></span>
                                            <input className="form-control" type="email" name="text" placeholder="Ingresar correo electr??nico" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Tel??fono</label>
                                        <div className="form-group mb-0">
                                            <span className="la form-icon"><FiPhone /></span>
                                            <input className="form-control" type="tel" name="text" placeholder="Ingresar n??mero de contacto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="payment-option">
                    <div className="billing-title-wrap pt-0">
                        <h3 className="widget-title pb-0">Formas de Pago</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="payment-method-wrap p-4">
                        <div className="payment-tab">
                            <div className="payment-trigger">
                                <label className="payment-radio">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                    <span>Transferencia Bancaria</span>
                                    <div className="payment-content payment-active mt-2">
                                        <div className="section-heading">
                                            <p className="sec__desc font-size-15 line-height-24">
                                                Realice su pago directamente en la cuenta de nuestro banco.
                                                Favor usar el numero de orden o ID de la referencia de pago.
                                                Su orden no ser?? confirmada hasta que se confirme el pago en nuestra cuenta.                                     account.
                                            </p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="payment-tab">
                            <div className="payment-trigger">
                                <label className="payment-radio">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                    <span>Tarjeta de Credito o Debito</span>
                                    <span className="card-icon float-right">
                                        <img src={state.paymentImg} alt="Payment" />
                                    </span>
                                    <div className="payment-content payment-active mt-3">
                                        <div className="contact-form-action">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="input-box">
                                                            <label className="label-text">Nombre que aparece en la tarjeta</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon"><BsPencil /></span>
                                                                <input className="form-control" placeholder="Card Name" type="text" name="text" required="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-box">
                                                            <label className="label-text">N??mero de tarjeta</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon"><BsPencil /></span>
                                                                <input className="form-control" name="text" placeholder="1234  5678  9876  5432" required="" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="input-box">
                                                            <label className="label-text">Mes del vencimiento</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon"><BsPencil /></span>
                                                                <input className="form-control" placeholder="MM" required="" name="text" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="input-box">
                                                            <label className="label-text">A??o del vencimiento </label>
                                                            <div className="form-group">
                                                                <span className="la form-icon"><BsPencil /></span>
                                                                <input className="form-control" placeholder="AA" required="" name="text" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="input-box">
                                                            <label className="label-text">Codigo de Seguridad (CVV)</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon"><BsPencil /></span>
                                                                <input className="form-control" placeholder="CVV" required="" name="text" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="payment-tab">
                            <div className="payment-trigger">
                                <label className="payment-radio paypal-option">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                    <span>Paypal</span>
                                    <span className="card-icon float-right">
                                        <img src={state.paypalImg} alt="Paypal" />
                                    </span>
                                    <div className="payment-content payment-active mt-2">
                                        <div className="section-heading">
                                            <p className="sec__desc font-size-15 line-height-24">
                                                Ser?? redirigido a Paypal para finalizar el pago.
                                            </p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="section-block-2 mt-4"></div>
                        <div className="btn-box mt-4">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="chb1" />
                                <label htmlFor="chb1">
                                    He leido y aceptado los  <Link to="#" className="color-text">Terminos & Condiciones</Link>
                                </label>
                            </div>
                            <button type="submit" className="theme-btn border-0 mt-3">
                                confirmar Orden
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalInfo;
