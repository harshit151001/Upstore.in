import React from 'react';
import UpDoggy from './Components/Images/UpDoggy.png';
import useWindowDimensions from './customapis/useWindowDimensions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 2vh;
  border-radius: 10px;
  background-color: #ec436f;
  color: white;
  border: none;
  padding: 9px;
  font-weight: 600;
  font-size: 19px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 10vh;
`;

export const ContentWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

export const ErrTitle = styled.div`
  font-weight: 800;
  font-size: 39px;
  margin-top: 3vh;
`;

const Err = () => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <ContentWrapper>
        <img style={width < 780 ? { width: '273px' } : { width: '400px' }} src={UpDoggy} alt="" />
        <div>
          <ErrTitle>Uh oh.</ErrTitle>
          <div style={{ fontSize: '2.5vh' }}>This page doesn't seem to exist</div>
          <Link to="/">
            <Button>Lets Navigate You Back</Button>
          </Link>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Err;
