import React, {useEffect} from 'react';
import Slider from '../Carousel/Slider';
//import Carousell from '../Cards/Carousel';
import Loginmodal from '../Modals/Loginmodal'
<<<<<<< HEAD

=======
import { isAutheticated } from "../../auth/helper/index";
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862

const Home = () => {

 const [modalShow, setModalShow] = React.useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setModalShow(true)
  }, 5000);
  return () => clearTimeout(timer);
}, []);

  return (
<<<<<<< HEAD
    <>
      <Slider />
      <Loginmodal show={modalShow}
        onHide={() => setModalShow(false)}/>
=======
  <>
      <Slider />
      {!isAutheticated()&& <Loginmodal show={modalShow}
        onHide={() => setModalShow(false)}/>}
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
    </>
  );
};

export default Home;