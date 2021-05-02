import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../db';

import GeneralHeader from "../../../components/common/GeneralHeader";
import Breadcrumb from "../../../components/common/Breadcrumb";
import PlaceGrid from "../../../components/places/PlaceGrid";
import Button from "../../../components/common/Button";
import {FiRefreshCw} from "react-icons/fi";
import NewsLetter from "../../../components/other/cta/NewsLetter";
import Footer from "../../../components/common/footer/Footer";
import ScrollTopBtn from "../../../components/common/ScrollTopBtn";
import GenericHeader from "../../../components/common/GenericHeader";
import breadcrumbimg from "../../../assets/images/apartaestudio.jpg";
import sectiondata from "../../../store/store";

const state = {
    bdimg: breadcrumbimg,
}

const Apartaestudios = () => {

    const {category_name} = useParams();
    const [inmuebles, setInmuebles] = useState([]);
    const [items, setItems] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('inmuebles').where('categoria', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })
                
                setInmuebles(arr)
            })
            
        }


    }, [category_name])

    return (
        <main className="listing-grid">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Apartaestudios" MenuPgTitle="Inmuebles" img={state.bdimg}/>

            {/* Place Grid */}
            <section className="card-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <GenericHeader />
                        </div>
                    </div>
                    
                    <div className="row">
                        

                        <ul>

                        {
                            items.map((item) => (
                                <li key={item.id}>
                                <PlaceGrid inmuebles={inmuebles} />
                                </li>
                            ))
                        }
                        </ul>

                        

                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared mt-4 text-center">
                                <Button text="Mostrar Más" url="#">
                                    <span className="la">
                                        <FiRefreshCw />
                                    </span>
                                </Button>
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

export default Apartaestudios;
