import React, { useEffect, useContext } from 'react';
import Slider from '../Carousel/Slider';
//import Carousell from '../Cards/Carousel';
import Loginmodal from '../Modals/Loginmodal';
import { isAutheticated } from '../../auth/helper/index';
import { appContext } from '../../Statemanagement/Statecontext';

import Categorylist from '../Categories/List/Categorylist';

const Home = () => {
  const MainContext = useContext(appContext);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Slider />

      <Loginmodal show={modalShow && !MainContext.state.loggedIn} onHide={() => setModalShow(false)} />
      <Categorylist />
    </div>
  );
};

export default Home;
