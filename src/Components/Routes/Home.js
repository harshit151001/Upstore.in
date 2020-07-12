import React, {useEffect} from 'react';
import Slider from '../Carousel/Slider';
//import Carousell from '../Cards/Carousel';
import Loginmodal from '../Modals/Loginmodal'
import { isAutheticated } from "../../auth/helper/index";

const Home = () => {

 const [modalShow, setModalShow] = React.useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setModalShow(true)
  }, 5000);
  return () => clearTimeout(timer);
}, []);

  return (
  <>
      <Slider />
      {!isAutheticated()&& <Loginmodal show={modalShow}
        onHide={() => setModalShow(false)}/>}
    </>
  );
};

export default Home;