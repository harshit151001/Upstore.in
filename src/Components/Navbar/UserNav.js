import React, { useState } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../customapis/useWindowDimensions';

const Sidenav = styled.div`
height: 100%;
width: 0;
position: fixed;
z-index: 1;
top: 0;
left: 0;
background-color: #111;
overflow-x: hidden;
transition: 0.5s;
padding-top: 15vw;

@media  (min-width: 990px) {
  :hover{
    width: 250px
  }
    display: inline-block
   }

   

@media  (max-height: 450px) {
 padding-top: 15px
 bottom: 0;
 top:10;

}
  }
`;

const CloseButton = styled.p`
  color: red;
  fon-size: 63px;
  margin-top: 0;
  cursor: pointer;
`;

const UserNav = props => {
  const { width } = useWindowDimensions();
  const [navWidth, setNavWidth] = useState(props.initialWidth);
  const [height, setHeight] = useState(props.initialHeight);
  const [leftPosition, setLeftPosition] = useState(`${width > 1400 ? '-20vw' : '0'}`);

  const closeNav = () => {
    setNavWidth(props.initialWidth || '0');
    setHeight(props.initialHeight || '0');
  };
  const openNav = () => {
    setNavWidth(props.finalWidth || '100%');
    setHeight(props.finalHeight || '100%');
  };

  const SidenavStyle = {
    width: `${navWidth}`,
    height: `${height || '100%'}`,
    marginTop: `${props.marginTop || '0'}`,
    textAlign: `${props.textAlign || 'center'}`,
    left: leftPosition
  };

  return (
    <>
      {width < 990 && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={openNav}>Menu</button>
        </div>
      )}
      <Sidenav
        style={SidenavStyle}
        onMouseEnter={() => {
          setLeftPosition('0');
        }}
        onMouseLeave={() => {
          setLeftPosition(`${width > 1400 ? '-20vw' : '0'}`);
        }}
        onClick={closeNav}
      >
        {width < 990 && <CloseButton>&times;</CloseButton>}
        {props.children}
      </Sidenav>
    </>
  );
};

export default UserNav;
