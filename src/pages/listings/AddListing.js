import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import breadcrumbimg from "../../assets/images/bogotayAndes.jpg";
//import sectiondata from "../../store/store";
import { getFirestore, getStorage } from "../../db";
import CategoriaService from "../../services/categorias.service";
import InmuebleService from "../../services/inmuebles.service";
import { useFormInput, useFormSelect } from "../../hooks/forms.hook";
import InmueblesContext from "../../contexts/AddListing.context";
import Loading from "../../components/common/Loading";
import { useHistory } from "react-router-dom";

const states = {
  breadcrumbimg: breadcrumbimg,
};

function AddListing() {
  const [categorias, setCategorias] = useState([]);

  const [files, setFiles] = useState([]);
  let history = useHistory();
  const titulo = useFormInput("");
  const descripcion = useFormInput("");
  const categoria = useFormSelect("", "");
  const operacion = useFormSelect("", "");
  const amoblado = useFormSelect("", "");
  const ambientes = useFormSelect("", "");
  const habitaciones = useFormSelect("", "");
  const baños = useFormSelect("", "");
  const areaTotal = useFormInput("");
  const areaConstruida = useFormInput("");
  const areaEstrato = useFormSelect("");
  const direccion = useFormInput("");
  const complementaria = useFormInput("");
  const barrio = useFormInput("");
  const ciudad = useFormSelect("");
  const localidad = useFormSelect("");
  const postal = useFormInput("");
  const administracion = useFormInput("");
  const antiguedad = useFormInput("");
  const telefonoContacto = useFormInput("");
  const correoRepresentante = useFormInput("");
  const representante = useFormInput("");
  const negocio = useFormInput("");
  const matricula = useFormInput("");
  const precio = useFormInput("");
  const caracteristicas = [];
  const [loading, setLoading] = useState(false);
  const form = {
    loading,
    setLoading,
    history,
    titulo,
    descripcion,
    categoria,
    operacion,
    ambientes,
    antiguedad,
    habitaciones,
    baños,
    areaTotal,
    areaConstruida,
    areaEstrato,
    amoblado,
    categoria,
    direccion,
    complementaria,
    barrio,
    ciudad,
    localidad,
    postal,
    telefonoContacto,
    correoRepresentante,
    representante,
    caracteristicas,
    precio,
    administracion,
    matricula,
    negocio,
    files,
    setFiles,
    categorias,
  };
  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  const handleChangeCaracteristicas = (e) => {
    console.log(e);
    console.log(e.target.dataset.id);
    console.log(e.target.checked);
    //setInmueble({...inmueble,caracteristicas: e.target.value});
  };

  const grabarInmueble = () => {
    setLoading(true);
    console.log("titulo", titulo.value);
    console.log("descripcion", descripcion.value);
    console.log("categoria", categoria.label);
    const inmueble = {
      titulo: titulo.value,
      descripcion: descripcion.value,
      categoria: {
          id: categoria.id,
          descripcion: categoria.label
      }

    };

    const ref = getStorage().ref();
    const file = files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type,
    };
    const task = ref.child(name).put(file, metadata);
    let urlImagen = "";
    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        urlImagen = url;
      })
      .then(() => {
        InmuebleService.create(inmueble)
          .then(function (docRef) {
            docRef
              .set(
                { idFirebase: docRef.id, imagen: urlImagen },
                { merge: true }
              )
              .then(() => {
                console.log("Extra id created");
              });
            console.log("Document written with ID: ", docRef.id);
            setLoading(false);
            history.push('/list-map-view2')
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch(console.error);
  };

  const onDataChange = (items) => {
    let categorias = [];

    items.docs.forEach((doc) => {
      categorias.push({
        value: doc.id,
        label: doc.data().descripcion ?? "",
      });
    });

    setCategorias(categorias);
  };

  useEffect(() => {
    const unsuscribe = CategoriaService.getAll().onSnapshot(onDataChange);
    return () => unsuscribe();
  }, []);

  if (loading) return <Loading></Loading>;
  else
    return (
      <InmueblesContext.Provider value={form}>
        <main className="add-listing">
          {/* Header */}
          <GeneralHeader />

          {/* Breadcrumb */}
          <Breadcrumb
            CurrentPgTitle="Agregar Inmueble"
            MenuPgTitle="Publicaciones"
            img={states.breadcrumbimg}
          />

          {/* Add Listing */}
          <section className="add-listing-area padding-top-40px padding-bottom-100px">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 mx-auto">
                  <GeneralInfo />
                  <AddLocation />
                  <AddFullDetails />
                  <PhotoUploader />
                  <Amenities />
                  <AddPrice />

                  <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                    <div className="billing-content p-0">
                      <div className="custom-checkbox d-block mr-0">
                        <input type="checkbox" id="privacy" />
                        <label htmlFor="privacy">
                          Estoy de acuerdo{" "}
                          <Link to="#" className="color-text">
                            Politicas y Privacidad
                          </Link>
                        </label>
                      </div>
                      <div className="custom-checkbox d-block mr-0">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                          Estoy de acuerdo{" "}
                          <Link to="#" className="color-text">
                            Terminos y condiciones
                          </Link>
                        </label>
                      </div>
                      <div className="btn-box mt-4">
                        <button
                          type="button"
                          className="theme-btn border-0"
                          onClick={() => grabarInmueble()}
                        >
                          Publicar
                        </button>
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
      </InmueblesContext.Provider>
    );
}

export default AddListing;
