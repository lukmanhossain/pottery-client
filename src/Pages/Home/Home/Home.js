import React from 'react';
// import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
// import Navigation from '../../Shared/Navigation/Navigation';
// import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ContactForm from '../Contact/ContactForm';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import News from '../Upcoming/News/News';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <Services></Services>
            <News></News>
            <Faq></Faq>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;