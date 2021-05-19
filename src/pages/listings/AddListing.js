import React, { useState, useEffect } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralInfo from "../../components/addlisting/GeneralInfo";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
//import OpeningHours from "../../components/addlisting/OpeningHours";
import AddPrice from "../../components/addlisting/AddPrice";
//import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import {Link} from "react-router-dom";
import breadcrumbimg from '../../assets/images/bogotayAndes.jpg'
//import sectiondata from "../../store/store";
import {getFirestore, getStorage} from '../../db';

const states = {
    breadcrumbimg: breadcrumbimg
}

function AddListing() {

    const [inmueble,setInmueble] = useState({});
    const [categorias, setCategorias] = useState([]);

    const [files, setFiles] = useState([]);

    const handleChangeTitulo = (e) => setInmueble({...inmueble,titulo: e.target.value});
    const handleChangeCategorias = (e) => setInmueble({...inmueble,categorias: e});
    const handleChangeDescripcion = (e) => setInmueble({...inmueble,descripcion: e.target.value});
    const handleChangeOperacion = (e) => setInmueble({...inmueble,operacion: e});
    const handleChangeAmoblado = (e) => setInmueble({...inmueble,amoblado: e});
    const handleChangeAmbientes = (e) => setInmueble({...inmueble,ambientes: e});
    const handleChangeHabitaciones = (e) => setInmueble({...inmueble,habitaciones: e});
    const handleChangeBaños = (e) => setInmueble({...inmueble,baños: e});
    const handleChangeAreaTotal = (e) => setInmueble({...inmueble,areaTotal: e.target.value});
    const handleChangeAreaConstruida = (e) => setInmueble({...inmueble,areaConstru: e.target.value});
    const handleChangeEstrato = (e) => setInmueble({...inmueble,estrato: e});
    const handleChangeDireccion = (e) => setInmueble({...inmueble,direccion: e.target.value});
    const handleChangeComplementaria = (e) => setInmueble({...inmueble,complementaria: e.target.value});
    const handleChangeBarrio = (e) => setInmueble({...inmueble,barrio: e.target.value});
    const handleChangeCiudad = (e) => setInmueble({...inmueble,ciudad: e});
    const handleChangeLocalidad = (e) => setInmueble({...inmueble,localidad: e});
    const handleChangePostal = (e) => setInmueble({...inmueble,codigoPostal: e.target.value});
    const handleChangeAdministracion = (e) => setInmueble({...inmueble,administracion: e.target.value});    
    const handleChangeAntiguedad = (e) => setInmueble({...inmueble,antiguedad: e.target.value});
    const handleChangeTelefonoContacto = (e) => setInmueble({...inmueble,telefonoContacto: e.target.value});
    const handleChangeCorreoRepresentante = (e) => setInmueble({...inmueble,correoRepresent: e.target.value});
    const handleChangeRepresentante = (e) => setInmueble({...inmueble,representante: e.target.value});
    const handleChangeCaracteristicas = (e) => {
            console.log(e);
            console.log(e.target.dataset.id);
            console.log(e.target.checked);
     //setInmueble({...inmueble,caracteristicas: e.target.value});
    };
    const handleChangeNegocio =(e) => setInmueble({...inmueble,negocio: e.target.value});
    const handleChangeMatricula = (e) => setInmueble({...inmueble,matricula: e.target.value});
    const handleChangePrecio = (e) => setInmueble({...inmueble,precio: e.target.value});

    const grabarInmueble = () => {
            console.log("inmueble:", inmueble);
            const ref = getStorage().ref();
            const file = files[0];
            const name = (+new Date()) + '-' + file.name;
            const metadata = {
            contentType: file.type
            };
            const task = ref.child(name).put(file, metadata);
            let urlImagen = "";
            task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
                urlImagen = url;
            }).then(()=>
            {
                getFirestore().collection("inmuebles").add(inmueble).then(function(docRef) {
                    docRef.set({idFirebase: docRef.id, imagen:urlImagen}, {merge:true}).then(
                      ()=> {
                        console.log("Extra id created");
                      }
                    );
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            }
            )
            .catch(console.error);
            
    };

    useEffect(() => {
        const fetchCategorias = () => {
           return getFirestore().collection('categorias').get()
           .then(response => {
            let array=[];
            response.forEach(doc => {
                array.push(
                    {
                    value: doc.id, 
                    label: doc.data().descripcion ?? '',
                })
            })
            setCategorias(array);
        })
          .catch(err => {
            // some error handling
          });
      };
      fetchCategorias();
    }, []);


    return (
        <main className="add-listing">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Agregar Inmueble" MenuPgTitle="Publicaciones" img={states.breadcrumbimg} />

            {/* Add Listing */}
            <section className="add-listing-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <GeneralInfo 
                            handleChangeTitulo={handleChangeTitulo} 
                            handleChangeDescripcion={handleChangeDescripcion}
                            handleChangeCategorias={handleChangeCategorias}
                            handleChangeOperacion={handleChangeOperacion}   
                            handleChangeAmbientes={handleChangeAmbientes}
                            handleChangeAntiguedad={handleChangeAntiguedad}
                            handleChangeHabitaciones={handleChangeHabitaciones}
                            handleChangeBaños={handleChangeBaños}
                            handleChangeAreaTotal={handleChangeAreaTotal}
                            handleChangeAreaConstruida={handleChangeAreaConstruida}
                            handleChangeEstrato={handleChangeEstrato}
                            handleChangeAmoblado={handleChangeAmoblado}
                            categorias={categorias}

                            />

                            <AddLocation 
                            handleChangeDireccion={handleChangeDireccion}
                            handleChangeComplementaria={handleChangeComplementaria}
                            handleChangeBarrio={handleChangeBarrio}
                            handleChangeCiudad={handleChangeCiudad}
                            handleChangeLocalidad={handleChangeLocalidad}
                            handleChangePostal={handleChangePostal}
                            />
                            <AddFullDetails 
                            handleChangeTelefonoContacto={handleChangeTelefonoContacto}
                            handleChangeCorreoRepresentante={handleChangeCorreoRepresentante}
                            handleChangeRepresentante={handleChangeRepresentante}
                            />
                            <PhotoUploader files={files} setFiles={setFiles}/>
                            <Amenities
                            handleChangeCaracteristicas={handleChangeCaracteristicas}
                            />
                            <AddPrice 
                            handleChangePrecio={handleChangePrecio}   
                            handleChangeAdministracion={handleChangeAdministracion}
                            handleChangeMatricula={handleChangeMatricula}
                            handleChangeNegocio={handleChangeNegocio}
                            />

                            <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                                <div className="billing-content p-0">
                                    <div className="custom-checkbox d-block mr-0">
                                        <input type="checkbox" id="privacy" />
                                        <label htmlFor="privacy">Estoy de acuerdo <Link to="#" className="color-text">Politicas y Privacidad</Link></label>
                                    </div>
                                    <div className="custom-checkbox d-block mr-0">
                                        <input type="checkbox" id="terms" />
                                        <label htmlFor="terms">Estoy de acuerdo <Link to="#" className="color-text">Terminos y condiciones</Link>
                                        </label>
                                    </div>
                                    <div className="btn-box mt-4">
                                        <button type="button" className="theme-btn border-0" onClick={()=>grabarInmueble()}>Publicar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter 

            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />
            
            */}


            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default AddListing;
