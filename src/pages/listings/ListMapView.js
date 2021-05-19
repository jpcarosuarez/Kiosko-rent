import React from 'react';
import {useState, useEffect} from 'react';
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import PlaceListing from "../../components/places/PlaceListing";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";
import MapViewCluster from "../../components/contact/MapViewCluster";
import sectiondata from "../../store/store";
import {getFirestore} from '../../db';
import {GiChickenOven, GiPositionMarker, GiWineGlass} from 'react-icons/gi';
import {
    IoIosCheckmarkCircle,
    IoMdStar,
    IoMdStarHalf
} from "react-icons/io";
import img2 from "../../assets/images/img7.jpg";
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60

function ListMapView() {

    
    const [arriendos,setArriendos] = useState([]);
    
    useEffect(() => {
        const fetchBusinesses = () => {
           return getFirestore().collection('inmuebles').get()
           .then(response => {
            let array=[];
            response.forEach(doc => {
                array.push(
                    {
                    id: doc.id, 
                    bedge: doc.data().titulo ?? '',
                    title: 'Favorite Place Food Bank',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: doc.data().ciudad ?? '',
                    image: doc.data().imagen ?? img2,
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
                })
            })
            setArriendos(array);

            
        })
          .catch(err => {
            // some error handling
          });
      };
      fetchBusinesses();
    }, []);


    return (
        <main className="List-map-view">
            {/* Header */}
            <GeneralHeader />

            {/* Mapview */}
            <MapViewCluster />


            {/* Place List */}
            <section className="card-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <GenericHeader />
                        </div>

                        <div className="col-lg-4">
                            <ListingListSidebar />
                        </div>

                        <div className="col-lg-8">
                            <PlaceListing listitems={arriendos}  />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared text-center">
                                <Button text="load more" url="#" className="border-0">
                                    <span className="d-inline-block">
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

export default ListMapView;
