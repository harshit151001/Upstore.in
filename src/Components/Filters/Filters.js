import styled from 'styled-components';
import React from 'react';

const Text = styled.h1`
  @media (max-width: 600px) {
    display: 'none';
  }
`;
const ContainerDiv = styled.div`
  @media (max-width: 600px) {
    display: 'none';
  }
`;

function Filters() {
  return (
    <>
      <ContainerDiv>
        <Text>Filters</Text>
      </ContainerDiv>
    </>
  );
}

export default Filters;
