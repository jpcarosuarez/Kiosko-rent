import React,{useEffect,useState} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategories from "../../components/other/categories/PopularCategories";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PopularCategoriesMore from "../../components/other/categories/PopularCategoriesMore";
import breadcrumbimg from '../../assets/images/bogotaAndes.jpg'
import sectiondata from "../../store/store";
import CategoriaService from "../../services/categorias.service";
import {GiChickenOven, GiPositionMarker, GiWineGlass} from 'react-icons/gi';
import apartamentos from "../../assets/images/apartamentos.jpg"; // 263*175


const state = {
    breadcrumbImg: breadcrumbimg,
}

function AllCategories() {
    const [categorias,setCategorias] = useState([]);

const onDataChange = (items) => {
    let categorias = [];

    items.docs.forEach((doc) => {
      categorias.push(
        {
            id: doc.id,
            icon: <GiChickenOven />,
            title: doc.data().descripcion ?? "",
            stitle: '12 Listings',
            url: '/apartamentos',
            img: doc.data().image
        }  
        );
    });

    setCategorias(categorias);
  };

  useEffect(() => {
    const unsuscribe = CategoriaService.getAll().onSnapshot(onDataChange);
    return () => unsuscribe();
  }, []);

    return (
        <main className="all-categories">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Espacios en arriendo o Venta" MenuPgTitle="Todas las Categorias" img={state.breadcrumbImg} />

            <section className="cat-area padding-top-40px padding-bottom-80px">
                <div className="container">
                    <div className="row">
                        <PopularCategories catitems={categorias} />
                        <PopularCategoriesMore catitems={sectiondata.popularcategories.morecats} />
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

export default AllCategories;
