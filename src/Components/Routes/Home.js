import React, { useState, useEffect, useContext } from 'react';
import Slider from '../Carousel/Slider';
import Loginmodal from '../Modals/Loginmodal';
import { appContext } from '../../Statemanagement/Statecontext';
//import Footer from '../Footer/Footer';
import Categorylist from '../Categories/List/Categorylist';
import Footerhome from '../Footer/Footerhome';
import Features from '../Feautures/Features';
//import Cartlist from '../Cart/Cartlist';

const Home = () => {
  const MainContext = useContext(appContext);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Slider />
      <Loginmodal
        show={modalShow && !MainContext.state.loggedIn}
        onhide={() => {
          setModalShow(false);
        }}
      />
      <Categorylist />
      <Features />
      <Footerhome />
    </div>
  );
};

export default Home;
