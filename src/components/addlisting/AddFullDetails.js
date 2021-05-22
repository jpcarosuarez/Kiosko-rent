import React,{useContext} from 'react';
import { AiOutlineUser} from 'react-icons/ai';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import InmueblesContext from '../../contexts/AddListing.context';


function AddFullDetails() {
    const form = useContext(InmueblesContext);
    
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
                                        <label className="label-text"> Contacto del inmueble</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineUser />
                                            </span>
                                            <input className="form-control" type="text" name="name" placeholder="Nombre Completo" {...form.representante}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Correo electrónico</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <FaRegEnvelope />
                                            </span>
                                            <input className="form-control" type="email" name="email" placeholder="Correo electrónico" {...form.correoRepresentante} />
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
                                            <input className="form-control" type="text" name="text" placeholder="Teléfono Contacto" {...form.telefonoContacto}/>
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
