import React, { useEffect } from 'react'
import aos from 'aos';
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testiomonial from './components/Testimonial/Testiomonial';
import Footer from './components/Footer/Footer';


const App = () => {

  useEffect(() => {
    aos.init(
      {
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100
      }
    );
  });

  return (
    <div className='overflow-x-hidden overflow-y-hidden h-100'>
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testiomonial />
      <Footer />
    </div>
  )
}

export default App