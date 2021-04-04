import React from 'react';
import { MdStar } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import PhotoUploader2 from "../addlisting/PhotoUploader2";

const states = {
    title: 'Dejar una Reseña',
    subtitle: 'Su dirección de correo electrónico no será publicada. Los campos obligatorios están marcados *'
}
function ReviewFields() {
    return (
        <>
            <div className="add-review-listing padding-top-50px" id="review">
                <h2 className="widget-title">
                    {states.title}
                </h2>
                <div className="title-shape"></div>
                <div className="section-heading padding-top-20px">
                    <p className="sec__desc font-size-16">
                        {states.subtitle}
                    </p>
                </div>
                <ul className="rating-list padding-top-20px">
                    <li>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <label className="review-label">
                            <input type="radio" name="review-radio" />
                            <span className="review-mark"></span>
                        </label>
                    </li>
                    <li>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <label className="review-label">
                            <input type="radio" name="review-radio" />
                            <span className="review-mark"></span>
                        </label>
                    </li>
                    <li>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <label className="review-label">
                            <input type="radio" name="review-radio" />
                            <span className="review-mark"></span>
                        </label>
                    </li>
                    <li>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <label className="review-label">
                            <input type="radio" name="review-radio" />
                            <span className="review-mark"></span>
                        </label>
                    </li>
                    <li>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <span className="la d-inline-block">
                            <MdStar />
                        </span>
                        <label className="review-label">
                            <input type="radio" name="review-radio" />
                            <span className="review-mark"></span>
                        </label>
                    </li>
                </ul>
                <div className="contact-form-action mt-5">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-box">
                                    <label className="label-text">Nombre</label>
                                    <div className="form-group">
                                        <span className="la form-icon"><AiOutlineUser /></span>
                                        <input className="form-control" type="text" name="name" placeholder="Su nombre" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-box">
                                    <label className="label-text">Correo</label>
                                    <div className="form-group">
                                        <span className="la form-icon"><FaRegEnvelope /></span>
                                        <input className="form-control" type="email" name="email" placeholder="Correo electrónico" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="input-box">
                                    <label className="label-text">Reseña / Comentario</label>
                                    <div className="form-group">
                                        <span className="la form-icon"><BsPencil /></span>
                                        <textarea className="message-control form-control" name="message" placeholder="Escriba su mensaje">

                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="upload-btn-box">
                                    <form action="#" method="post" encType="multipart/form-data">

                                        <PhotoUploader2 />

                                        <button className="theme-btn border-0 margin-top-20px" type="submit" value="submit">
                                            Enviar Comentario
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ReviewFields;
