import React from 'react';
import SignInOptions from "./SignInOptions";
import {AiOutlineUser} from 'react-icons/ai'
import {FiLock} from 'react-icons/fi'
import {Link} from "react-router-dom";

function LoginBox({title, subtitle}) {
    return (
        <>
            <div className="billing-form-item mb-0">
                <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                    <h3 className="widget-title font-size-28 pb-0">
                        {title}
                    </h3>
                    <p className="font-size-16 font-weight-medium">
                        {subtitle}
                    </p>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">

                                <SignInOptions />

                                <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">o</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Usuario o correo</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="email" name="text" placeholder="Usuario o correo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Contrase??a</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Contrase??a" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                                            <div>
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">Recordar</label>
                                            </div>
                                            <div>
                                                <Link to="/recover" className="color-text font-weight-medium">
                                                    ??Recordar Contrase??a?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                        <button className="theme-btn border-0" type="submit">
                                            Ingresar Ahora
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="font-weight-medium">??No eres miembro? <Link to="/sign-up" className="color-text"> Registro</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginBox;