//library
import React from 'react';

//custom
import Mobile from './Mobile';
import Desktop from './Desktop';
import useWindowDimensions from '../../customapis/useWindowDimensions';

function Navbar() {
  const style = {
    fontFamily: 'poppins',
    top: '0',
    height: '9vh',
    maxHeight: '98px'
  };

  const { width } = useWindowDimensions();
  return <div style={style}>{width < 991 ? <Mobile /> : <Desktop />}</div>;
}

export default Navbar;
