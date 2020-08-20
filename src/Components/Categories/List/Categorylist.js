//!library
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Categorycard from '../Cards/Categorycard';

import { appContext } from '../../../Statemanagement/Statecontext';
import { Section, Title, Header } from '../../Feautures/Features';
import bos from '../../Images/forJumbotron.svg';

const Box = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Categorylist = () => {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  return (
    <Section>
      <Title>
        <Header>Shop for...</Header>
        <img src={bos} alt="icon" style={{ width: '6vw', minWidth: '50px', marginTop: '8px' }} />
      </Title>
      <Box>
        {console.log(categorydata)}
        {categorydata.map(({ name, imagePath, _id }) => {
          return (
            <Link style={{ textDecoration: 'none' }} to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}>
              <Categorycard name={name} path={imagePath} key={_id} />
            </Link>
          );
        })}
      </Box>
    </Section>
  );
};

export default Categorylist;
