import React from 'react';
import {useState, useEffect, memo} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategories from "../../components/other/categories/PopularCategories";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
//import PopularCategoriesMore from "../../components/other/categories/PopularCategoriesMore";
import breadcrumbimg from '../../assets/images/bogotaAndes.jpg'
import sectiondata from "../../store/store";
import {getFirestore} from '../../db';
import {BsBuilding} from 'react-icons/bs';
import {GiChickenOven, GiPositionMarker, GiWineGlass} from 'react-icons/gi';
import apartamentos from "../../assets/images/apartamentos.jpg"; // 263*175

const state = {
    breadcrumbImg: breadcrumbimg,
}

function AllCategories() {

    const db = getFirestore();
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        db.collection('categorias').get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({
                        id: doc.id,
                        icon: doc.data().icon, //TODO: traer icono segun categoria
                        title: doc.data().descripcion,
                        stitle: '12 Listings', //TODO: número de publicaciones de la colección
                        url: '#',
                        img: apartamentos
                    })
                })
                setCategorias(arr);
               // console.log(arr);
            })
            
        .catch(e => console.log(e))
    });




    return (
        <main className="all-categories">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Espacios en arriendo o Venta" MenuPgTitle="Todas las Categorias" img={state.breadcrumbImg} />

            <section className="cat-area padding-top-40px padding-bottom-80px">
                <div className="container">
                    <div className="row">
                        {/* <PopularCategories catitems={sectiondata.popularcategories.categories} />*/}
                        <PopularCategories catitems={categorias} /> 
                        {/* (se quita y se muestran todas) <PopularCategoriesMore catitems={sectiondata.popularcategories.morecats} /> */}
                    </div>
                </div>
            </section>

            {/* NewsLetter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default memo(AllCategories);
