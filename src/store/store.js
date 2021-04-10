import React from 'react'
import {RiBuilding4Line, RiHotelBedLine, RiPlaneLine, RiReplyLine, RiBuilding3Line, RiStoreLine, RiGovernmentLine} from 'react-icons/ri';
import {GiChickenOven, GiPositionMarker, GiWineGlass} from 'react-icons/gi';
import {
    BsBookmark,
    BsBriefcase,
    BsCheckCircle, BsEye,
    BsGear,
    BsListCheck,
    BsMap,
    BsMusicNoteBeamed,
    BsPencil
} from 'react-icons/bs';
import {MdClose, MdFitnessCenter, MdStar, MdStarBorder, MdStarHalf} from 'react-icons/md';
import {HiOutlineHome} from 'react-icons/hi';
import {ImOffice} from 'react-icons/im';

import bannerbg1 from '../assets/images/bogotacasas.jpg';
import img1 from "../assets/images/img1.jpg"; // 263*175
import img2 from "../assets/images/img7.jpg"; // 362*242

//Imagenes de las Categorias//

import apartamentos from "../assets/images/apartamentos.jpg"; // 263*175
import casas from "../assets/images/bogotacasas.jpg"; // 263*175

/*------------Imagenes por ubicaciones */

import chapinero from "../assets/images/chapinero.jpeg";
import candelaria from "../assets/images/bogotacasas.jpg";
import centrointernacional from "../assets/images/centrointernacional.jpg";
import cedritos from "../assets/images/cedritos.jpg";
import usaquen from "../assets/images/usaquen.jfif";
import suba from "../assets/images/suba.jpg";
import teusaquillo from "../assets/images/teusaquillo.jpg";
import medellin from "../assets/images/medellin.jpg";
import cali from "../assets/images/cali.jpg";


import sign2 from "../assets/images/sign2.svg";

/*
import img1 from "../assets/images/img1.jpg"; // 263*175
import img1 from "../assets/images/img1.jpg"; // 263*175
import img1 from "../assets/images/img1.jpg"; // 263*175
import img1 from "../assets/images/img1.jpg"; // 263*175
import img1 from "../assets/images/img1.jpg"; // 263*175
import img1 from "../assets/images/img1.jpg"; // 263*175
*/
import authorimg from "../assets/images/small-team1.jpg"; // 67*60
import symble1 from "../assets/images/symble1.png";
import symble2 from "../assets/images/symble2.png";
import symble3 from "../assets/images/symble3.png";
import symble4 from "../assets/images/symble4.png";
import {TiArrowUnsorted, TiBrush, TiPlane} from "react-icons/ti";
import {
    IoIosCheckmarkCircle,
    IoIosFitness, IoIosRocket, IoMdCut,
    IoMdMusicalNotes, IoMdPaperPlane,
    IoMdStar,
    IoMdStarHalf
} from "react-icons/io";
import {
    FiBookOpen,
    FiCheck,
    FiCheckCircle, FiExternalLink,
    FiFilter,
    FiHeadphones, FiHeart,
    FiMail,
    FiMap,
    FiMusic,
    FiPlus,
    FiShoppingCart, FiThumbsUp, FiUsers
} from "react-icons/fi";
import {AiOutlineCar, AiOutlineEllipsis, AiOutlineHome, AiOutlineQuestionCircle, AiOutlineUser} from "react-icons/ai";
import team1 from "../assets/images/team2.jpg"; // 111*100
import team2 from "../assets/images/testi-img1.jpg"; // 106*95
import team3 from "../assets/images/testi-img2.jpg"; // 95*85
import team4 from "../assets/images/testi-img3.jpg"; // 83*75
import team6 from "../assets/images/testi-img4.jpg"; // 78*70
import {GoFile} from "react-icons/go";
import cta2mobileimg from "../assets/images/mobile.png";
import logo1 from "../assets/images/client-logo.png";
import darklogo from "../assets/images/logo2.png";
import {
    FaBehance, FaCogs,
    FaDribbble,
    FaFacebookF, FaInstagram,
    FaLinkedinIn, FaMinus, FaPlus, FaQuoteRight, FaRegComment, FaRegEdit,
    FaRegEnvelope, FaRegHeart, FaRegHospital, FaRegMap,
    FaRegMoneyBillAlt, FaRegTrashAlt, FaSearchPlus, FaSort, FaTwitter, FaYoutube
} from "react-icons/fa";

import { BiCaretRightCircle } from "react-icons/bi";
import destinationimg1 from "../assets/images/img5.jpg";
import flag1 from "../assets/images/flag14.png";
import flag2 from "../assets/images/flag1.jpg";
import flag3 from "../assets/images/flag2.jpg";
import flag4 from "../assets/images/flag13.jpg";
import flag5 from "../assets/images/flag18.jpg";
import destinationimg6 from "../assets/images/img7.jpg";
import flag6 from "../assets/images/flag3.jpg";
import flag7 from "../assets/images/flag7.jpg";
import flag8 from "../assets/images/flag5.png";
import flag9 from "../assets/images/flag19.png";
import hiw3videoimg from "../assets/images/video-img2.jpg";
import {FcLineChart} from "react-icons/fc";
import dreamimg from "../assets/images/img6.jpg"; // 263*165
import hiw5videoimg from "../assets/images/video-img3.jpg";
import flag10 from "../assets/images/flag10.png";
import flag11 from "../assets/images/flag11.png";
import flag12 from "../assets/images/flag12.jpg";
import flag13 from "../assets/images/flag13.jpg";
import flag14 from "../assets/images/flag14.png";
import flag15 from "../assets/images/flag15.jpg";
import flag16 from "../assets/images/flag16.jpg";
import flag17 from "../assets/images/flag17.jpg";
import flag18 from "../assets/images/flag18.jpg";
import flag19 from "../assets/images/flag19.png";
import flag20 from "../assets/images/flag20.png";
import listingdetailsvideoimg from "../assets/images/img4.jpg";
import similarimg from "../assets/images/img8.jpg"; // 90*90
import breadcrumbimg from "../assets/images/bread-bg.jpg"; //1920*838
import userimage from "../assets/images/team1.jpg"; // 368*331
import imgboximg from "../assets/images/img10.jpg"; // 570*345
import about2img from "../assets/images/img2.jpg"; //389*259
import mainimage from "../assets/images/video-img.jpg"; // 750*500



const sectiondata = {
    headermenu: [
        {
            title: 'Arrienda Fácil',
            path: '/',
            dropdown: [
                {
                    title: 'Arriendos Mensuales',
                    path: '/all-categories'
                },
                {
                    title: 'Arriendos diarios',
                    path: '/all-categories'
                },
                {
                    title: 'Arriendos de espacios por horas',
                    path: '/all-categories'
                },
                {
                    title: 'Todas las Categorias',
                    path: '/all-categories'
                },
                {
                    title: 'Publicar un Arriendo',
                    path: '/add-listing/new'
                }
            ]
        },
        {
            title: 'Requisitos de Arriendos',
            path: '/all-categories',
            dropdown: [
                {
                    title: 'Hasta 3 meses',
                    path: '/all-categories'
                },
                {
                    title: '3 meses o más ',
                    path: '/all-locations'
                },
            ]
        },
        {
            title: 'Agentes',
            path: '/listing-grid',
            dropdown: [
                {
                    title: 'Agentes de Bienes Raices',
                    path: '/listing-grid'
                },
                {
                    title: 'Administracion de Propiedades',
                    path: '/list-map-view'
                },
                {
                    title: 'Seguros inmobiliarios',
                    path: '/list-map-view2'
                },
                {
                    title: 'Propiedad Horizontal',
                    path: '/listing-list'
                },
                {
                    title: 'Remodelaciones',
                    path: '/list-left-sidebar'
                },
                {
                    title: 'Crea una cuenta de agente gratis',
                    path: '/list-right-sidebar'
                },
            ]
        },
        
    ],
    herobanners: {
        banner2: {
            title: 'Arrienda facil y seguro',
            content: 'Encuentra arriendos por horas y estadias largas por mas de 3 meses',
            categories: [
                {
                    path: '#',
                    text: 'apartamentos',
                    icon: <RiBuilding4Line />
                },
            
                {
                    path: '#',
                    text: 'casas',
                    icon: <HiOutlineHome />
                },
                {
                    path: '#',
                    text: 'oficinas',
                    icon: <ImOffice />
                },
                {
                    path: '#',
                    text: 'bodegas',
                    icon: <RiBuilding3Line />
                },
                {
                    path: '#',
                    text: 'Locales',
                    icon: <RiStoreLine />
                },
                {
                    path: '#',
                    text: 'Terrazas | Salones',
                    icon: <RiGovernmentLine />
                }
            ],
            bgimage: bannerbg1
        },
    },
    categories: {
        featuredcategories: {
            connector: 'o',
            title: 'Busca las principales categorias',
            items: [
                {
                    path: "#",
                    title: "Apartamentos",
                    icon: <RiBuilding4Line />
                },
                {
                    path: "#",
                    title: "Apartaestudios",
                    icon: <GiChickenOven />
                },
                {
                    path: "#",
                    title: "Casas",
                    icon: <HiOutlineHome />
                },
                {
                    path: "#",
                    title: "Oficinas",
                    icon: <BsMusicNoteBeamed />
                },
                {
                    path: "#",
                    title: "Fincas",
                    icon: <MdFitnessCenter />
                },
                {
                    path: "#",
                    title: "Bodegas",
                    icon: <RiHotelBedLine />
                }
            ]
        },
        browsecategories: {
            sectitle: '¿Que es lo que necesitas arrendar ?',
            seccontent: 'Descubre los mejores arriendos por categorias',
            items: [
                {
                    id: 1,
                    icon: <GiChickenOven />,
                    title: 'Apartamentos',
                    listingsNum: 42,
                    cardLink: '#'
                },
                {
                    id: 2,
                    icon: <RiHotelBedLine />,
                    title: 'Apartaestudios',
                    listingsNum: 22,
                    cardLink: '#'
                },
                {
                    id: 3,
                    icon: <FiShoppingCart />,
                    title: 'Oficinas',
                    listingsNum: 7,
                    cardLink: '#'
                },
                {
                    id: 4,
                    icon: <IoMdCut />,
                    title: 'Fincas',
                    listingsNum: 31,
                    cardLink: '#'
                },
                {
                    id: 5,
                    icon: <FaRegHospital />,
                    title: 'Bodegas',
                    listingsNum: 33,
                    cardLink: '#'
                },
                {
                    id: 6,
                    icon: <BsGear />,
                    title: 'Locales',
                    listingsNum: 33,
                    cardLink: '#'
                },
                {
                    id: 7,
                    icon: <TiBrush />,
                    title: 'Terrazas & Salones',
                    listingsNum: 31,
                    cardLink: '#'
                },
            ]
        },
        browsecategories2: {
            sectitle: 'Buscar por Categorias',
            seccontent: '¿Que buscar? Encuentra Apartamentos, apartaestudios, oficinas, casas, locales comerciales o hasta una terraza comunal.',
            categories: [
                {
                    img: img1,
                    icon: <GiChickenOven />,
                    title: 'Apartamentos',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <TiPlane />,
                    title: 'Apartaestudios',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <RiHotelBedLine />,
                    title: 'Oficinas',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <FiMusic />,
                    title: 'Casas',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <FiShoppingCart />,
                    title: 'Fincas',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <IoIosFitness />,
                    title: 'Locales',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <GiWineGlass />,
                    title: 'Terrazas & Salones',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <TiBrush />,
                    title: 'Lotes',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <TiBrush />,
                    title: 'Parqueaderos',
                    cardLink: '#'
                },
                {
                    img: img1,
                    icon: <FaRegMoneyBillAlt />,
                    title: 'Bodegas',
                    cardLink: '#'
                },

            ]
        },
        popularcategories: {
            title: 'Más Buscados:',
            lists: [
                {
                    url: '#',
                    title: 'Apartamentos'
                },
                {
                    url: '#',
                    title: 'Apartaestudios'
                },
                {
                    url: '#',
                    title: 'Oficinas '
                },
                {
                    url: '#',
                    title: 'Casas'
                },
                {
                    url: '#',
                    title: 'Fincas'
                }
            ]
        }
    },
    popularcategories: {
        sectitle: 'Arriendos Y Servicios Asociados ¡Sin Tanto Papel!',
        seccontent: 'Encuentra arriendos desde una oficina por 3 horas hasta un apartamento por un año.',
        categories: [
            {
                icon: <GiChickenOven />,
                title: 'Apartamentos',
                stitle: '12 Listings',
                url: '#',
                img: apartamentos
            },
            {
                icon: <TiPlane />,
                title: 'Apartaestudios',
                stitle: '22 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <RiHotelBedLine />,
                title: 'Casas',
                stitle: '33 Listings',
                url: '#',
                img: casas
            },
            {
                icon: <IoMdMusicalNotes />,
                title: 'Oficinas',
                stitle: '44 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <FiShoppingCart />,
                title: 'Fincas',
                stitle: '48 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <IoIosFitness />,
                title: 'Locales Comerciales',
                stitle: '50 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <FaRegHospital />,
                title: 'Habitaciones | Hoteles',
                stitle: '20 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <GiWineGlass />,
                title: 'Bodegas',
                stitle: '14 Listings',
                url: '#',
                img: img1
            }

        ],
        morecats: [
            {
                icon: <TiBrush />,
                title: 'Parqueaderos',
                stitle: '20 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <TiBrush />,
                title: 'Terrazas | Salones',
                stitle: '20 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <TiBrush />,
                title: 'Lotes',
                stitle: '20 Listings',
                url: '#',
                img: img1
            },

            /*
            {
                icon: <GiPineTree />,
                title: 'adventure',
                stitle: '23 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <FiBookOpen />,
                title: 'educations',
                stitle: '40 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <AiOutlineCar />,
                title: 'cars',
                stitle: '33 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <BsBriefcase />,
                title: 'jobs',
                stitle: '20 Listings',
                url: '#',
                img: img1
            },
            {
                icon: <FaRegMoneyBillAlt />,
                title: 'business',
                stitle: '20 Listings',
                url: '#',
                img: img1
            }*/
        ]
    },
    populardestination: {
        sectitle: 'Encuentra Arriendos por ubicaciones',
        seccontent: 'Apartamentos, casas, oficinas o espacios libres para arrendar simple y fácil',
        destinations: [
            {
                img: chapinero,
                cityFlag: sign2,
                cityName: 'Chapinero',
                listingTxt: '44 listings',
                boxCol: '4',
                cardUrl: '/listing-grid'
            },
            {
                img: candelaria,
                cityFlag: sign2,
                cityName: 'Candelaria',
                listingTxt: '12 listings',
                boxCol: '4',
                cardUrl: '/listing-grid'
            },
            {
                img: centrointernacional,
                cityFlag: sign2,
                cityName: 'Centro Internacional',
                listingTxt: '22 listings',
                boxCol: '4',
                cardUrl: '/listing-grid'
            },


            {
                img: cedritos,
                cityFlag: sign2,
                cityName: 'Cedritos',
                listingTxt: '48 listings',
                boxCol: '3',
                cardUrl: '/listing-grid'
            },
            {
                img: usaquen,
                cityFlag: sign2,
                cityName: 'Usaquén',
                listingTxt: '50 listings',
                boxCol: '3',
                cardUrl: '/listing-grid'
            },
            {
                img: suba,
                cityFlag: sign2,
                cityName: 'Suba',
                listingTxt: '14 listings',
                boxCol: '3',
                cardUrl: '/listing-grid'
            },
            {
                img: teusaquillo,
                cityFlag: sign2,
                cityName: 'Teusaquillo',
                listingTxt: '32 listings',
                boxCol: '3',
                cardUrl: '/listing-grid'
            },
            {
                img: medellin,
                cityFlag: sign2,
                cityName: 'Medellín',
                listingTxt: '20 listings',
                boxCol: '6',
                cardUrl: '/listing-grid'
            },
            {
                img: cali,
                cityFlag: sign2,
                cityName: 'Cali',
                listingTxt: '14 listings',
                boxCol: '6',
                cardUrl: '/listing-grid'
            }
        ],
        viewmorebtn: 'Ver todas las ubicaciones',
        viewmorebtnurl: '/all-locations'
    },
    locations: [
        {
            img: flag1,
            title: 'United states (2)',
            titleUrl: '#'
        },
        {
            img: flag2,
            title: 'London (4)',
            titleUrl: '#'
        },
        {
            img: flag3,
            title: 'Australia (7)',
            titleUrl: '#'
        },
        {
            img: flag4,
            title: 'Japan (9)',
            titleUrl: '#'
        },
        {
            img: flag5,
            title: 'France (12)',
            titleUrl: '#'
        },
        {
            img: flag6,
            title: 'Russia (14)',
            titleUrl: '#'
        },
        {
            img: flag7,
            title: 'New Zealand (17)',
            titleUrl: '#'
        },
        {
            img: flag8,
            title: 'India (19)',
            titleUrl: '#'
        },
        {
            img: flag9,
            title: 'Netherlands (15)',
            titleUrl: '#'
        },
        {
            img: flag10,
            title: 'Sweden (17)',
            titleUrl: '#'
        },
        {
            img: flag11,
            title: 'Saudi Arabia (29)',
            titleUrl: '#'
        },
        {
            img: flag12,
            title: 'Scotland (10)',
            titleUrl: '#'
        },
        {
            img: flag13,
            title: 'Canada (43)',
            titleUrl: '#'
        },
        {
            img: flag14,
            title: 'Mexico (45)',
            titleUrl: '#'
        },
        {
            img: flag15,
            title: 'Bangladesh (50)',
            titleUrl: '#'
        },
        {
            img: flag16,
            title: 'South Africa (60)',
            titleUrl: '#'
        },
        {
            img: flag17,
            title: 'Pakistan (48)',
            titleUrl: '#'
        },
        {
            img: flag18,
            title: 'Costa Rica (33)',
            titleUrl: '#'
        },
        {
            img: flag19,
            title: 'Italy (44)',
            titleUrl: '#'
        },
        {
            img: flag20,
            title: 'Thailand (55)',
            titleUrl: '#'
        }
    ],
    howitworks: {
        hiw1: {
            sectitle: 'Plan The Vacation of Your Dreams',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    id: 1,
                    icon: <FiMap />,
                    title: 'Find Interesting Place',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                },
                {
                    id: 2,
                    icon: <FiMail />,
                    title: 'Contact a Few authors',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                },
                {
                    id: 3,
                    icon: <AiOutlineUser />,
                    title: 'Make a Reservation',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                }
            ],
        },
        hiw2: {
            sectitle: 'What We Offer',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    active: false,
                    icon: <BsMap />,
                    title: 'Great Places',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                },
                {
                    active: false,
                    icon: <GiChickenOven />,
                    title: 'Great Restaurants',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                },
                {
                    active: false,
                    icon: <RiHotelBedLine />,
                    title: 'Great Hotels',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                },
                {
                    active: true,
                    icon: <AiOutlineEllipsis />,
                    title: 'And More...',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                }
            ]
        },
        hiw3: {
            sectitle: '¿Cómo puedes ganar dinero con Kiosko?',
            seccontent: 'Te invitamos a ser parte de esta gran comunidad inmobiliaria',
            videobtn: 'Mira Como Funciona',
            videoid: 'R2kiP9Qu7Pc',
            videoImg: hiw3videoimg,
            items: [
                {
                    id: 1,
                    icon: <FaRegMoneyBillAlt />,
                    title: 'Agentes Inmobiliarios',
                    desc: 'Agentes capacitados y certificados por Kiosko pueden ayudarle a administrar su inmueble integramente.'
                },
                {
                    id: 2,
                    icon: <FcLineChart />,
                    title: 'Administracion de inmuebles',
                    desc: 'Servicios de limpieza que pueden ayudarle a tener un inmueble siempre listo para el proximo arriendo.'
                },
                {
                    id: 3,
                    icon: <FaRegHeart />,
                    title: 'Servicio de Mudanza',
                    desc: 'Trasteos, mudanzas o como le llames, ellos son los encargados de llevar tus cosas de un lugar a otro en las mejores condiciones.'
                },
                {
                    id: 4,
                    icon: <FaRegHeart />,
                    title: 'Servicios de Limpieza',
                    desc: 'Trasteos, mudanzas o como le llames, ellos son los encargados de llevar tus cosas de un lugar a otro en las mejores condiciones.'
                }
            ]
        },
        hiw4: {
            sectitle: '¿Porque escoger Kiosko?',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    icon: <FiCheck />,
                    title: 'Transparencia',
                    desc: 'Siempre tendrás la información detallada y actualizada'
                },
                {
                    icon: <FiCheck />,
                    title: 'Garantía',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                },
                {
                    icon: <FiCheck />,
                    title: 'We Are Trusted and Secured',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                },
                {
                    icon: <FiCheck />,
                    title: 'Online Support 24/7 ',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                }
            ]
        },
        hiw5: {
            sectitle: 'Get Started With Dirto!',
            seccontent: 'Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.',
            items: [
                {
                    id: 1,
                    icon: <BsPencil />,
                    title: 'Pick a Keyword',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                },
                {
                    id: 2,
                    icon: <GiPositionMarker />,
                    title: 'Select Location',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                },
                {
                    id: 3,
                    icon: <TiArrowUnsorted />,
                    title: 'Select Category',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                },
                {
                    id: 4,
                    icon: <FiCheck />,
                    title: 'View Results',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                }
            ],
            videoBg: hiw5videoimg,
            videoBtn: 'watch how it works',
            videoid: 'R2kiP9Qu7Pc'
        },
        hiw6: {
            sectitle: 'How Dirto Works',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    id: 1,
                    icon: <FaSearchPlus />,
                    title: 'Find a Place',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                },
                {
                    id: 2,
                    icon: <FaRegMap />,
                    title: 'Select a location',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                },
                {
                    id: 3,
                    icon: <FaSort />,
                    title: 'Select a Category',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                },
                {
                    id: 4,
                    icon: <FiCheckCircle />,
                    title: 'See Result',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                }
            ]
        },
        hiw7: {
            sectitle: 'Why Choose Us',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    icon: <FiHeadphones />,
                    title: '24/7 Hours Support',
                    desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
                },
                {
                    icon: <FaCogs />,
                    title: 'Admin Panel',
                    desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
                },
                {
                    icon: <FiThumbsUp />,
                    title: 'Mobile friendly',
                    desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
                }
            ]
        }
    },
    placesgrid: [
        {
            bedge: 'New Open',
            title: 'Favorite Place Food Bank',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5'
        },
        {
            bedge: 'Closed',
            title: 'beach blue boardwalk',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Hotel Govendor',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Favorite Place Food Bank',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5'
        },
        {
            bedge: 'Closed',
            title: 'beach blue boardwalk',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Hotel Govendor',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
    ],
    placesgridmoreitems: [
        {
            bedge: 'New Open',
            title: 'Favorite Place Food Bank',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image:img1,
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5'
        },
        {
            bedge: 'Closed',
            title: 'beach blue boardwalk',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Hotel Govendor',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Favorite Place Food Bank',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5'
        },
        {
            bedge: 'Closed',
            title: 'beach blue boardwalk',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Hotel Govendor',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'Closed',
            title: 'beach blue boardwalk',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
        {
            bedge: 'New Open',
            title: 'Hotel Govendor',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: img2,
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '#',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6'
        },
    ],
    listing: {
        sidebar: {
            widgetFilterCategory: {
                title: 'Filter by Category',
                items: [
                    {
                        id: 1,
                        cat: 'Travel',
                        catNum: 11
                    },
                    {
                        id: 2,
                        cat: 'Arts',
                        catNum: 22
                    },
                    {
                        id: 3,
                        cat: 'Technology',
                        catNum: 9
                    },
                    {
                        id: 4,
                        cat: 'Fashion',
                        catNum: 11
                    },
                    {
                        id: 5,
                        cat: 'Technology',
                        catNum: 12
                    },
                    {
                        id: 6,
                        cat: 'Lifestyle',
                        catNum: 48
                    },
                    {
                        id: 7,
                        cat: 'Design',
                        catNum: 23
                    },
                    {
                        id: 8,
                        cat: 'Computer',
                        catNum: 28
                    },
                    {
                        id: 9,
                        cat: 'Jobs',
                        catNum: 24
                    },
                    {
                        id: 10,
                        cat: 'Real Estates',
                        catNum: 40
                    },
                    {
                        id: 11,
                        cat: 'Clothing',
                        catNum: 23
                    },
                    {
                        id: 12,
                        cat: 'Beauty & Spa',
                        catNum: 18
                    },
                    {
                        id: 13,
                        cat: 'Event',
                        catNum: 65
                    },
                    {
                        id: 14,
                        cat: 'Health & Fitness',
                        catNum: 34
                    },
                    {
                        id: 15,
                        cat: 'Restaurants',
                        catNum: 20
                    }
                ]
            },
            widgetFilterTags: {
                title: 'Filter by Tags',
                tags: [
                    {
                        path: '#',
                        title: 'technology'
                    },
                    {
                        path: '#',
                        title: 'fashion'
                    },
                    {
                        path: '#',
                        title: 'art'
                    },
                    {
                        path: '#',
                        title: 'design'
                    },
                    {
                        path: '#',
                        title: 'food'
                    },
                    {
                        path: '#',
                        title: 'development'
                    },
                    {
                        path: '#',
                        title: 'marketing'
                    },
                    {
                        path: '#',
                        title: 'video'
                    },
                    {
                        path: '#',
                        title: 'music'
                    },
                    {
                        path: '#',
                        title: 'lifestyle'
                    },
                    {
                        path: '#',
                        title: 'adventure'
                    }
                ]
            },
            widgetFilterFeatures: {
                title: 'Filter by Features',
                features: [
                    {
                        id: 1,
                        text: 'Elevator in building'
                    },
                    {
                        id: 2,
                        text: 'Friendly Workspace'
                    },
                    {
                        id: 3,
                        text: 'Instant Book'
                    },
                    {
                        id: 4,
                        text: 'Wireless Internet'
                    },
                    {
                        id: 5,
                        text: 'Free Parking On Premises'
                    },
                    {
                        id: 6,
                        text: 'Free Parking On Street'
                    },
                    {
                        id: 7,
                        text: 'Smoking Allowed'
                    },
                    {
                        id: 8,
                        text: 'Events'
                    },
                    {
                        id: 9,
                        text: 'Wheelchair Accessible'
                    },
                    {
                        id: 10,
                        text: 'Alarm System'
                    },
                    {
                        id: 11,
                        text: 'Electricity'
                    },
                    {
                        id: 12,
                        text: 'Attached Garage'
                    },
                    {
                        id: 13,
                        text: 'Security Cameras'
                    },
                ]
            },
            widgetSortby: {
                title: 'Sort by',
                items: [
                    {
                        id: 1,
                        title: 'Best sellers'
                    },
                    {
                        id: 2,
                        title: 'Newest'
                    },
                    {
                        id: 3,
                        title: 'Best Rated'
                    },
                    {
                        id: 4,
                        title: 'Oldest'
                    }
                ]
            },
            widgetPostedby: {
                title: 'Posted by',
                items: [
                    {
                        title: 'Dealer'
                    },
                    {
                        title: 'individual'
                    },
                    {
                        title: 'Reseller'
                    }
                ]
            },
        },
        listinglists: [
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
        ]
    },
    listingDetails: {
        title: 'Tasty Hand-Pulled Noodles',
        description: 'Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        descriptiontitle: 'Description',
        featurestitle: 'Features',
        featureslists: [
            {
                icon: <BsCheckCircle />,
                title: 'Instant Noodles'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Smoking Allowed'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Bike Parking'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Wireless Internet'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Street Parking'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Accepts Credit Cards'
            }
        ],
        videotitle: 'Video',
        videoImg: listingdetailsvideoimg,
        videoid: 'R2kiP9Qu7Pc',
        videobtn: 'Watch Video',
        contactinfos: {
            title: 'Contact Information',
            address: '101 East Parkview Road, New York',
            email: 'example@gmail.com',
            number: '+7(111)123456789',
            website: 'www.techydevs.com',
            websiteUrl: 'https://techydevs.com',
            socials: [
                {
                    icon: <FaFacebookF />,
                    title: 'facebook',
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    title: 'twitter',
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaInstagram />,
                    title: 'instagram',
                    url: 'https://instagram.com'
                },
                {
                    icon: <FaLinkedinIn />,
                    title: 'linkedinIn',
                    url: 'https://linkedin.com'
                },
                {
                    icon: <FaYoutube />,
                    title: 'youtube',
                    url: 'https://youtube.com'
                }
            ]
        },
        comments: [
            {
                img: team1,
                name: 'Adam Smith',
                date: 'Reviewed 2 Days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ],
                replyBtn: 'Reply',
                replyBtnIcon: <RiReplyLine />,
                replyComments: [
                    {
                        img: team1,
                        name: 'Julian Smith',
                        date: 'Reviewed 3 Days ago',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ],
                        replyBtn: 'Reply',
                        replyBtnIcon: <RiReplyLine />,
                    }
                ]
            },
            {
                img: team1,
                name: 'Matt Derry',
                date: 'Reviewed 4 Days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                ],
                replyBtn: 'Reply',
                replyBtnIcon: <RiReplyLine />,
                replyComments: []
            }
        ],
        sidebar: {
            widgetAuthor: {
                authorImg: team2,
                authorName: 'Mark Williamson',
                date: 'Posted 3 Days ago',
                address: '101 Parkview, New York',
                email: 'example@gmail.com',
                number: '+7(111)123456789',
                website: 'www.techydevs.com',
                websiteUrl: 'https://techydevs.com',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaDribbble />,
                        url: 'https://dribbble.com'
                    },
                    {
                        icon: <FaBehance />,
                        url: 'https://behance.be'
                    }
                ]
            },
            widgetStaticsInfo: {
                title: 'Statics info',
                lists: [
                    {
                        icon: <BsListCheck />,
                        text: '12 Listings'
                    },
                    {
                        icon: <MdStarBorder />,
                        text: '4.4 Ratings'
                    },
                    {
                        icon: <BsBookmark />,
                        text: '24 Bookmark'
                    },
                    {
                        icon: <BsEye />,
                        text: '745 Views'
                    },
                    {
                        icon: <FiExternalLink />,
                        text: '120 Share'
                    },
                    {
                        icon: <FaRegComment />,
                        text: '20 Comments'
                    },
                    {
                        icon: <FiHeart />,
                        text: '120 Likes'
                    }
                ]
            },
            widgetOpenHours: {
                title: 'Opening Hours',
                stitle: 'now open',
                items: [
                    {
                        day: 'Monday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Tuesday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Wednesday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Thursday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Friday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Sat-Sun',
                        time: 'Closed',
                        close: true,
                    }
                ]
            },
            widgetCategories: {
                title: 'Categories',
                lists: [
                    {
                        cat: 'Restaurant',
                        catNum: 11,
                        url: '#'
                    },
                    {
                        cat: 'Shop',
                        catNum: 32,
                        url: '#'
                    },
                    {
                        cat: 'Fitness',
                        catNum: 21,
                        url: '#'
                    },
                    {
                        cat: 'Event',
                        catNum: 24,
                        url: '#'
                    },
                    {
                        cat: 'Bar',
                        catNum: 14,
                        url: '#'
                    },
                    {
                        cat: 'Salon',
                        catNum: 11,
                        url: '#'
                    },
                    {
                        cat: 'Beauty',
                        catNum: 10,
                        url: '#'
                    },
                ]
            },
            widgetTags: {
                title: 'Tags Cloud',
                lists: [
                    {
                        text: 'Travel',
                        url: '#'
                    },
                    {
                        text: 'Restaurant',
                        url: '#'
                    },
                    {
                        text: 'Gym',
                        url: '#'
                    },
                    {
                        text: 'Food',
                        url: '#'
                    },
                    {
                        text: 'Office',
                        url: '#'
                    },
                    {
                        text: 'Bar',
                        url: '#'
                    },
                    {
                        text: 'Health',
                        url: '#'
                    },
                    {
                        text: 'Car Parking',
                        url: '#'
                    },
                    {
                        text: 'Nightlife',
                        url: '#'
                    },
                    {
                        text: 'Doctor',
                        url: '#'
                    },
                    {
                        text: 'Bike Parking',
                        url: '#'
                    },
                ]
            },
            widgetSimilarListing: {
                title: 'Similar Listings',
                items: [
                    {
                        img: similarimg,
                        title: 'The best sale marketer of the next year',
                        titleUrl: '/blog-single',
                        price: '$19.00',
                        cat: 'Gym & Fitness',
                        catUrl: '#',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ]
                    },
                    {
                        img: similarimg,
                        title: 'How to make your ideas became true',
                        titleUrl: '/blog-single',
                        price: '$20.00',
                        cat: 'Restaurant',
                        catUrl: '#',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ]
                    },
                    {
                        img: similarimg,
                        title: 'What gets in the way of strategy',
                        titleUrl: '/blog-single',
                        price: '$19.00',
                        cat: 'Art & Design',
                        catUrl: '#',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ]
                    },
                    {
                        img: similarimg,
                        title: 'What gets in the way of strategy',
                        titleUrl: '/blog-single',
                        price: '$19.00',
                        cat: 'Outdoors',
                        catUrl: '#',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ]
                    },
                ]
            },
            widgetFollowConnect: {
                title: 'Follow & Connect',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaDribbble />,
                        url: 'https://dribbble.com'
                    },
                    {
                        icon: <FaBehance />,
                        url: 'https://behance.be'
                    },
                ]
            }
        }
    },
    userprofile: {
        sidebar: {
            img: team2,
            name: 'Mark Williamson',
            date: 'Joined 4 years ago',
            address: '101 Parkview, New York',
            number: '+7(111)123456789',
            email: 'example@gmail.com',
            website: 'www.techydevs.com',
            websiteUrl: 'https://techydevs.com',
            socials: [
                {
                    icon: <FaFacebookF />,
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaInstagram />,
                    url: 'https://instagram.com'
                },
                {
                    icon: <FaDribbble />,
                    url: 'https://dribbble.com'
                },
                {
                    icon: <FaBehance />,
                    url: 'https://behance.be'
                }
            ]
        }
    },
    dashboard: {
        breadcrumbimg: breadcrumbimg,
        cards: [
            {
                img: img2,
                title: 'Favorite Place Food Bank',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Beach Blue Boardwalk',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Hotel Govendor',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Favorite Place Food Bank',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Beach Blue Boardwalk',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Hotel Govendor',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            }
        ],
        userImg: userimage,
        userName: 'Mark Williamson',
        userbio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
        address: '101 Parkview, New York',
        phoneNum: '+7(111)123456789',
        website: 'www.techydevs.com',
    },
    teamdata: {
        sectitle: 'Our Expert Team Members',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        teams: [
            {
                img: userimage,
                title: 'Kamal Ahmed',
                titleUrl: '#',
                stitle: 'Business Consultant',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
            {
                img: userimage,
                title: 'Kamran Ahmed',
                titleUrl: '#',
                stitle: 'Photographer',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
            {
                img: userimage,
                title: 'Tanbir Ahmed',
                titleUrl: '#',
                stitle: 'Co-manager associated',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
            {
                img: userimage,
                title: 'Juhen Ahmed',
                titleUrl: '#',
                stitle: 'Director',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
        ]
    },
    pricingplan: [
        {
            icon: <IoMdPaperPlane />,
            title: 'Basic Plan',
            price: '49',
            currency: '$',
            mo: 'Per Month',
            features: [
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'One Listing',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: '90 Days Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Non-Featured',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Limited Support',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Average Price Range',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Business Hours',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Lifetime Availability',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Featured In Search Results',
                }
            ],
            buttonTxt: 'Continue',
            buttonUrl: '#',
            active: false
        },
        {
            icon: <RiPlaneLine />,
            title: 'Advanced Plan',
            price: '99',
            currency: '$',
            mo: 'Per Month',
            features: [
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'One Listing',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: '90 Days Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Non-Featured',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Limited Support',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Average Price Range',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Business Hours',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Lifetime Availability',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Featured In Search Results',
                }
            ],
            buttonTxt: 'Continue',
            buttonUrl: '#',
            active: true
        },
        {
            icon: <IoIosRocket />,
            title: 'Enterprise Plan',
            price: '149',
            currency: '$',
            mo: 'Per Month',
            features: [
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'One Listing',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: '90 Days Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Non-Featured',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Limited Support',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Average Price Range',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Business Hours',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Lifetime Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Featured In Search Results',
                }
            ],
            buttonTxt: 'Continue',
            buttonUrl: '#',
            active: false
        }
    ],
    aboutdata: {
        imagebox: [
            {
                img: imgboximg,
                title: 'Careers',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo',
                cardLink: '#'
            },
            {
                img: imgboximg,
                title: 'Newsroom',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo',
                cardLink: '#'
            },
            {
                img: imgboximg,
                title: 'Investor Relations',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo',
                cardLink: '#'
            }
        ],
        aboutst2: {
            title: 'Welcome to the Dirto Business Directory Service and a Public Company',
            content1: 'Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend.',
            content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.',
            items: [
                {
                    img: about2img,
                    boxClass: 'mt-4'
                },
                {
                    img: about2img,
                    boxClass: ''
                },
                {
                    img: about2img,
                    boxClass: 'mt-4'
                },
                {
                    img: about2img,
                    boxClass: ''
                }
            ]
        }
    },
    mostvisitedplaces: {
        sectitle: 'Most Visited Places',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        places: [
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img1,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                websiteUrl: 'https://example.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'sticky band party',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Event',
                cardTypeIcon: <IoMdMusicalNotes />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.4'
            },
            {
                bedge: 'Closed',
                title: 'Sena Clothing Shopping Mall',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Shop',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            }
        ]
    },
    recommendedplaces: {
        sectitle: 'Partners Certificados',
        seccontent: 'Contrata servicios especializados para tu hogar certificados integramente por Kiosko ',
        items: [
            {
                bedge: 'Certificado',
                title: 'Servicio de Limpieza',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/Limpieza 4 hrs',
                stitle: 'Bogotá, Cedritos',
                image: destinationimg6,
                cardType: 'Aseo',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.jelpit.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Recomendado',
                title: 'Servicio de mudanzas',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bogotá, Chapinero',
                image: destinationimg6,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'Promoción',
                title: 'Seguros para Arriendos',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: destinationimg6,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
        ]
    },
    dreamplaces: {
        sectitle: 'Explore Your Dream Places',
        seccontent: 'Explore most popular destination and places, Morbi convallis bibendum urna ut viverra. Maecenas,',
        places: [
            {
                img: dreamimg,
                country: 'united states',
                badge: 'Explore',
                placeNum: 5,
                listingNum: 250,
                cardColumn: 6,
                cardLink: '#'
            },
            {
                img: dreamimg,
                country: 'united kingdom',
                badge: 'Explore',
                placeNum: 7,
                listingNum: 220,
                cardColumn: 6,
                cardLink: '#'
            },
            {
                img: dreamimg,
                country: 'Australia',
                badge: 'Explore',
                placeNum: 8,
                listingNum: 80,
                cardColumn: 4,
                cardLink: '#'
            },
            {
                img: dreamimg,
                country: 'New zealand',
                badge: 'Explore',
                placeNum: 9,
                listingNum: 190,
                cardColumn: 4,
                cardLink: '#'
            },
            {
                img: dreamimg,
                country: 'Russia',
                badge: 'Explore',
                placeNum: 11,
                listingNum: 110,
                cardColumn: 4,
                cardLink: '#'
            }
        ],
        loadmoretext: 'Load More'
    },
    funfacts: {
        funfact1: {
            sectitle: 'Numbers Say Everything',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            counteritems: [
                {
                    id: '1',
                    start: 0,
                    end: 150,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Projects Completed'
                },
                {
                    id: '2',
                    start: 0,
                    end: 3040,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Happy Clients'
                },
                {
                    id: '3',
                    start: 0,
                    end: 2020,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Cup of Coffee'
                },
                {
                    id: '4',
                    start: 0,
                    end: 350,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Awards Winning'
                }
            ]
        },
        funfact2: {
            sectitle: 'Numbers Say Everything',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            counteritems: [
                {
                    id: '1',
                    title: 'Projects Completed',
                    buttonTxt: 'join now',
                    buttonUrl: '#',
                    start: 0,
                    end: 1150,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                },
                {
                    id: '2',
                    title: 'Happy Clients',
                    buttonTxt: 'join now',
                    buttonUrl: '#',
                    start: 0,
                    end: 3040,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                },
                {
                    id: '3',
                    title: 'Cup of Coffee',
                    buttonTxt: 'join now',
                    buttonUrl: '#',
                    start: 0,
                    end: 2020,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                },
                {
                    id: '4',
                    title: 'Awards Winning',
                    buttonTxt: 'join now',
                    buttonUrl: '#',
                    start: 0,
                    end: 350,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                }
            ]
        },
        funfact3: [
            {
                id: 1,
                title: 'New Visitors Every Week',
                start: 0,
                end: 250,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: 2,
                title: 'Happy customers every year',
                start: 0,
                end: 3040,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: 3,
                title: 'Awards Won',
                start: 0,
                end: 172,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: ''
            },
            {
                id: 4,
                title: 'New Listing Every Week',
                start: 0,
                end: 150,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            }
        ]
    },
    accordions: {
        sectitle: 'Listing faqs',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        items: [
            {
                title: 'What is a novel coronavirus?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Can I create a free listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'How much time does it take to get approval?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Do I have to commit to a yearly subscription?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Is my listing secure?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'How can i Delete listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'What is listing site?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Why people chose this listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: ''
            },
        ]
    },
    iconboxes: {
        iconlist1: [
            {
                id: 1,
                icon: <FiUsers />,
                title: 'Ask Community',
                subtitle: 'Get help from 1M+ Revolut users'
            },
            {
                id: 2,
                icon: <FiBookOpen />,
                title: 'Read our blog',
                subtitle: 'Follow the latest news and stories'
            },
            {
                id: 3,
                icon: <AiOutlineQuestionCircle />,
                title: 'Get help in the app',
                subtitle: 'Just head to Help in the app'
            },
        ]
    },
    calltoactions: {
        cta1: {
            title: 'Dirto is the best way to find & discover great local businesses',
            content: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero',
            btntext: 'Create Account',
            btnurl: '/sign-up',
            shapes: [
                {
                    img: symble1
                },
                {
                    img: symble2
                },
                {
                    img: symble3
                },
                {
                    img: symble4
                }
            ]
        },
        cta2: {
            title: 'Dirto Android and IOS App is Available!',
            content: 'Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet Lorem ipsum dolor sit amet.',
            img: cta2mobileimg,
            featurelists: [
                {
                    icon: <GoFile />,
                    text: 'Real Time Listing'
                },
                {
                    icon: <FiFilter />,
                    text: 'Budget Filter For Budget'
                },
                {
                    icon: <AiOutlineQuestionCircle />,
                    text: 'Notification Price Reduction'
                }
            ],
            shapes: [
                {
                    img: symble1
                },
                {
                    img: symble2
                },
                {
                    img: symble3
                },
                {
                    img: symble4
                }
            ]
        },
        cta3: {
            title: 'Dirto is the best way to find & discover great local businesses',
            content: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero',
            btntext: 'Create Account',
            btnurl: '/sign-up'
        },
        cta4: {
            title: 'Want to Join with us?',
            content: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            btntext: 'Join Now',
            btnurl: '#'
        },
        newsletters: {
            title: 'Suscribete a nuestras novedades',
            content: 'Suscribete y obtén las ultimas novedades y ofertas',
            btntext: 'Suscribirse',
            inputplaceholder: 'Ingresa tu Correo'
        }
    },
    contactdata: {
        title: 'Our Office',
        img: destinationimg1,
        desc: 'Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Praesent eros turpis, commodo vel justo at',
        address: 'USA 27TH Brooklyn NY',
        phoneNum: '+7(111)123456789',
        email: 'contact@dirto.com',
        opendays: 'Monday To Friday',
        opendaytime: '9am - 7pm',
        closeday: 'Saturday To Sunday',
        mapoverlay: {
            address: 'Melbourne, Australia, 105 South',
            city: 'Park Avenue',
            number: '2800 256 508',
            number2: '666 777 888',
            email1: 'needhelp@dirto.com',
            email2: 'inquiry@dirto.com'
        }
    },
    testimonialdata: {
        sectitle: 'What Our Users Said',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        sliders: [
            {
                id: 1,
                img: team1,
                title: 'Richard Doe',
                designation: 'united states',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: 2,
                img: team1,
                title: 'Denwen Evil',
                designation: 'united kingdom',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: 3,
                img: team1,
                title: 'Collis Pong',
                designation: 'melbourne, australia',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            }
        ],
        tmimage: [
            {
                tmimg: team1
            },
            {
                tmimg: team2
            },
            {
                tmimg: team3
            },
            {
                tmimg: team4
            },
            {
                tmimg: team1
            },
            {
                tmimg: team6
            }
        ]
    },
    blogsidebar: {
        wAuthor: {
            img: team2,
            name: 'Mark Williamson',
            designation: 'Senior Web Developer',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorem illo laborum magni, maxime omnis quam quod totam voluptatem voluptatibus?',
            sociallinks: [
                {
                    icon: <FaFacebookF />,
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaLinkedinIn />,
                    url: 'https://linkedin.com'
                },
                {
                    icon: <FaDribbble />,
                    url: 'https://dribbble.com'
                },
                {
                    icon: <FaBehance />,
                    url: 'https://behance.com'
                },
            ],
        },
        wPopularPosts: {
            title: 'Popular Posts',
            items: [
                {
                    img: similarimg,
                    title: 'The best sale marketer of the next year',
                    titleLink: '/blog-single',
                    date: '20 Jan, 2019',
                    author: 'TechyDevs',
                    authorUrl: 'https://techydevs.com',
                    cardClass: 'mb-3',
                },
                {
                    img: similarimg,
                    title: 'How to make your ideas became true',
                    titleLink: '/blog-single',
                    date: '20 Jan, 2019',
                    author: 'TechyDevs',
                    authorUrl: 'https://techydevs.com',
                    cardClass: 'mb-3',
                },
                {
                    img: similarimg,
                    title: 'What gets in the way of strategy',
                    titleLink: '/blog-single',
                    date: '20 Jan, 2019',
                    author: 'TechyDevs',
                    authorUrl: 'https://techydevs.com',
                    cardClass: 'mb-3',
                },
                {
                    img: similarimg,
                    title: 'What gets in the way of strategy',
                    titleLink: '/blog-single',
                    date: '20 Jan, 2019',
                    author: 'TechyDevs',
                    authorUrl: 'https://techydevs.com',
                    cardClass: '',
                },
            ]
        }
    },
    blogfullwidth: {
        items: [
            {
                img: img2,
                title: '50 Greatest Event Places in United Kingdom',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '25 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '25 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '27 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '492'
            },
            {
                img: img2,
                title: '50 Greatest Event Places In United Kingdom',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '27 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '589'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '27 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '134'
            }
        ],
        blgriditems: [
            {
                img: img2,
                title: '50 Greatest Event Places in United Kingdom',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: '50 Greatest Event Places in United Kingdom',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
        ],
        bl2colitems: [
            {
                img: img2,
                title: '50 Greatest Event Places in United Kingdom',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: '50 Greatest Event Places In United Kingdom',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                date: '12 Jan, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: authorimg,
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
        ]
    },
    blogDetails: {
        img: mainimage,
        author: 'David Wise',
        authorImg: authorimg,
        date: '12 Fab, 2020',
        meta: 'Tips & Tricks',
        metaLink: '#',
        likes: '480',
        title: 'How to Improve Your Customer Service Experience',
        desc1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        desc2: 'Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
        desc3: 'when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        desc4: 'Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.',

        /* Blockquote */
        bgimg: mainimage,
        quoteIcon: <FaQuoteRight />,
        quoteDesc: 'Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn\'t really do it, they just saw something. It seemed obvious to them after a while. That\'s because they were able to connect experiences they\'ve had and synthesize new things.',
        name: '- Steve Jobs',
        designation: 'Founder of Apple Inc.',

        /* desc Images */
        images: [
            {
                img: img2
            },
            {
                img: img2
            },
            {
                img: img2
            }
        ],
        bltags: {
            title: 'Tags: ',
            lists: [
                {
                    path: '#',
                    title: 'Travel'
                },
                {
                    path: '#',
                    title: 'Food'
                },
                {
                    path: '#',
                    title: 'Gym'
                },
            ]
        }
    },
    latestarticles: {
        sectitle: 'Latest Tips & Articles',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        btntext: 'View All Post',
        btnurl: '/blog-grid',
        items: [
            {
                img: img2,
                title: '50 Greatest Event Places in United Kingdom',
                date: '25 Dec,  2020',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                author: 'David Wise',
                authorImg: authorimg,
                likeNum: '244',
                cardUrl: '/blog-single'
            },
            {
                img: img2,
                title: 'Top 10 Best Clothing Shops In Sydney',
                date: '26 Dec,  2020',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                author: 'Mark Wins',
                authorImg: authorimg,
                likeNum: '535',
                cardUrl: '/blog-single'
            },
            {
                img: img2,
                title: 'Top 15 Greatest Hotels In United States',
                date: '27 Dec,  2020',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna',
                author: 'Matt Derry',
                authorImg: authorimg,
                likeNum: '294',
                cardUrl: '/blog-single'
            }
        ]
    },
    authors: {
        sectitle: 'Meet Top Authors',
        seccontent: 'Top 700+ famous authors on the Dirto. consectetur adipisicing elit Adipisci culpa possimus quis voluptatibus!',
        sliders: [
            {
                authorImg: team2,
                authorName: 'Steven Harvey',
                city: 'Australia',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '120',
                followers: '49',
                following: '49',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Alex Smith',
                city: 'United States',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Sirazz Khan',
                city: 'United Kingdom',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Daniel Wave',
                city: 'Italy',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Juhen Villa',
                city: 'Bangladesh',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Daniel Villa',
                city: 'Costa Rica',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Jhon Doe',
                city: 'France',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            }
        ],
    },
    clientlogos: [
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
    ],
    footerdata: {
        footerlogo: darklogo,
        footerdesc: 'Agencia inmobiliaria autorizada M.A. 2018122, Tu partner perfecto para el arriendo de tu espacio',
        sociallinks: [
            {
                icon: <FaFacebookF />,
                url: 'https://facebook.com/kioskoinmo'
            },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/kioskoinmobiliario/'
            },

        ],
        footerquicklinks: {
            title: 'Kiosko',
            links: [
                {
                    path: '/about',
                    text: 'Nosotros'
                },
                {
                    path: '/sign-up',
                    text: 'Registro'
                },
                {
                    path: '/login',
                    text: 'Ingresar'
                },
                {
                    path: '/add-listing/new',
                    text: 'Publicar mi espacio'
                },
                {
                    path: '/Contacto',
                    text: 'Contacto'
                },
                {
                    path: '/Precios',
                    text: 'Precios y Tarifas'
                }
            ]
        },
        footercategories: {
            title: 'Arriendos por horas y más',
            links: [
                {
                    path: '#',
                    text: 'Apartamentos'
                },
                {
                    path: '#',
                    text: 'Apartaestudios'
                },
                {
                    path: '#',
                    text: 'Casas'
                },
                {
                    path: '#',
                    text: 'Oficinas'
                },
                {
                    path: '#',
                    text: 'Fincas'
                },
                {
                    path: '#',
                    text: 'Locales Comerciales'
                },
                {
                    path: '#',
                    text: 'Bodegas'
                },
                {
                    path: '#',
                    text: 'Lotes'
                },
                {
                    path: '#',
                    text: 'Parqueaderos'
                },
                {
                    path: '#',
                    text: 'Terrazas | Salones'
                }
                
                
            ]
        },
        footercontact: {
            title: 'Contacto',
            lists: [
                {
                    icon: <AiOutlineHome />,
                    text: 'Carrera 10 # 64 - 45, Oficina Kiosko'
                },
                {
                    icon: <FiHeadphones />,
                    text: '+ 57 302 423 6366'
                },
                {
                    icon: <FaRegEnvelope />,
                    text: 'contacto@kioskoinmobiliario.com'
                }
            ]
        },
        copyright: {
            menus: [
                {
                    path: '#',
                    title: 'Terminos y condiciones'
                },
                {
                    path: '#',
                    title: 'Politicas de privacidad'
                },
                {
                    path: '#',
                    title: 'Ayuda'
                }
            ],
            languages: [
                'English',
                'Bangladesh',
                'Nepal',
                'America',
                'Arabic',
                'England',
            ],
            usersite: [
                'Agentes',
                'Propietarios',
                'Inquilinos',
                'Partners',

            ]
        }
    }

}
export default sectiondata
