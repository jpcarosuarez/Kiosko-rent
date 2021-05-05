import React from 'react';
import { BsPencilSquare, BsPencil } from 'react-icons/bs'
import Select from "react-select";



const state = {
    title: 'Información general del inmueble',
    categorias: [
        {
            value: 'categoria',
            label: 'Categoria'
        },
        {
            value: 'apartamento',
            label: 'Apartamento'
        },
        {
            value: 'apartaestudio',
            label: 'Apartaestudio'
        },
        {
            value: 'casa',
            label: 'Casa'
        },
        {
            value: 'finca',
            label: 'Finca'
        },
        {
            value: 'oficina',
            label: 'Oficina'
        },
        {
            value: 'salon',
            label: 'Salón o terraza '
        },
        {
            value: 'bodega',
            label: 'Bodega'
        },
        {
            value: 'local',
            label: 'Local Comercial'
        },
    ]
}


const operacion = {
    operaciones:[
        {
            value: 'porHoras',
            label:'Alquiler de espacios por Horas ( Minimo 3 horas)'          
        },
        {
            value: 'diario',
            label:'Arriendo diario'   
        },
        {
            value: 'mensual',
            label:'Arriendo Mensual'   
        },
        {
            value: 'venta',
            label:'Venta'  
        },
        {
            value: 'permuta',
            label:'Permuta'  
        }
    ],
}
const habitaciones = {
    
    cantidad:[
        {
            value: 0,
            label:'1'   
        },
        {
            value: 1,
            label:'2'   
        },
        {
            value: 2,
            label:'3'   
        },
        {
            value: 3,
            label:'4'   
        },
        {
            value: 4,
            label:'5+'   
        },
    ],  

}

const baños ={

    cantidad:[
        {
            value: 0,
            label:'1'   
        },
        {
            value: 1,
            label:'2'   
        },
        {
            value: 2,
            label:'3'   
        },
        {
            value: 3,
            label:'4'   
        },
        {
            value: 4,
            label:'5+'   
        },
    ],
}
const estratos = {
    estrato:[
        {
            value: 0,
            label:'1'
        },
        {
            value: 1,
            label:'2'
        },
        {
            value: 2,
            label:'3'
        },
        {
            value: 3,
            label:'4'
        },
        {
            value: 4,
            label:'5'
        },
        {
            value: 5,
            label:'6'
        },

    ],
}

function GeneralInfo({handleChangeTitulo, handleChangeOperacion, handleChangeAmbientes, handleChangeDescripcion, handleChangeCategorias, handleChangeAntiguedad, handleChangeHabitaciones, handleChangeBaños, handleChangeAreaTotal, handleChangeAreaConstruida, handleChangeEstrato}) {
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
                                        <label className="label-text">Título</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencilSquare />
                                            </span>
                                            <input className="form-control" type="text" name="titulo" placeholder="Nombre breve para identificar el inmueble" onChange={handleChangeTitulo}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Tipo de Inmueble</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="Categorias"
                                                onChange={handleChangeCategorias}
                                                options={state.categorias}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Tipo de Operacion</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="Arriendos"
                                                onChange={handleChangeOperacion}
                                                options={operacion.operaciones}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Ambientes</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="0"
                                                onChange={handleChangeAmbientes}
                                                options={habitaciones.cantidad}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Habitaciones</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="0"
                                                onChange={handleChangeHabitaciones}
                                                options={habitaciones.cantidad}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Baños</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="0"
                                                onChange={handleChangeBaños}
                                                options={baños.cantidad}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Área construida</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencilSquare />
                                            </span>
                                            <input className="form-control" type="text" name="area" placeholder="Área mts2" onChange={handleChangeAreaConstruida}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Área total</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencilSquare />
                                            </span>
                                            <input className="form-control" type="text" name="area" placeholder="Área mts2" onChange={handleChangeAreaTotal}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Estrato</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="3"
                                                onChange={handleChangeEstrato}
                                                options={estratos.estrato}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Antiguedad en Años</label>
                                        <div className="form-group">
                                        <input className="form-control" type="text" name="antiguedad" placeholder="Ej: 5" onChange={handleChangeAntiguedad}/>

                                        </div>
                                    </div>
                                </div>                             

                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Describe tu inmueble</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="descripcion" placeholder="Descripción del inmueble, ingresa información complementaria." onChange={handleChangeDescripcion}></textarea>
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
