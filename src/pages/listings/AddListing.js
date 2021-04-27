import React, { useState } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralInfo from "../../components/addlisting/GeneralInfo";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
import OpeningHours from "../../components/addlisting/OpeningHours";
import AddPrice from "../../components/addlisting/AddPrice";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import {Link} from "react-router-dom";
import breadcrumbimg from '../../assets/images/bogotayAndes.jpg'
import sectiondata from "../../store/store";
import {getFirestore} from '../../db';

const states = {
    breadcrumbimg: breadcrumbimg
}
function AddListing() {

    const [inmueble,setInmueble] = useState({});

    const handleChangeTitulo = (e) => setInmueble({...inmueble,titulo: e.target.value});
    const handleChangeHashtags = (e) => setInmueble({...inmueble,hashtags: e.target.value});
    const handleChangeDescripcion = (e) => setInmueble({...inmueble, descripcion: e.target.value});

    const grabarInmueble = () => {
            console.log("inmueble:", inmueble);
            getFirestore().collection("inmuebles").add(inmueble).then(function(docRef) {
                docRef.set({idFirebase: docRef.id}, {merge:true}).then(
                  ()=> {
                    console.log("Extra id created");
                  }
                );
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

    };



    return (
        <main className="add-listing">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Nueva Publicación" MenuPgTitle="Publicaciones" img={states.breadcrumbimg} />

            {/* Add Listing */}
            <section className="add-listing-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <GeneralInfo handleChangeTitulo={handleChangeTitulo} handleChangeHashtags={handleChangeHashtags} handleChangeDescripcion={handleChangeDescripcion}/>

                            <AddLocation />

                            <AddFullDetails />

                            <PhotoUploader />

                            <Amenities />

                            <OpeningHours />

                            <AddPrice />

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

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default AddListing;
