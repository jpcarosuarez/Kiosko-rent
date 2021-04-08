import React from 'react';
import SignUpBox from "../components/other/account/SignUpBox";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../assets/images/bread-bg.jpg'
import sectiondata from "../store/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function SignUp() {
    return (
        <main className="signup-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Ingresar" img={state.breadcrumbimg} />

            <section className="form-shared padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <SignUpBox title="Crea tu cuenta" subtitle="con tu red social" />
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

export default SignUp;