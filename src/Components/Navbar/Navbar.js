//library
import React, { useEffect, useState } from 'react';

//custom
import Mobile from './Mobile';
import Desktop from './Desktop';

/************************************************************************************************************************************************/
/************************************************************************************************************************************************/
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
/************************************************************************************************************************************************/
/************************************************************************************************************************************************/

function Navbar() {
  const style = {
    fontFamily: 'MuseoModerno',
    position: 'fixed',
    top: '0',
    zIndex: 100,
    width: '100%',
    height: '9vh',
  };
  const { width } = useWindowDimensions();
  return <div style={style}>{width < 991 ? <Mobile /> : <Desktop />}</div>;
}

export default Navbar;
