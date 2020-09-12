//!library
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Categorycard from '../Cards/Categorycard';

import { appContext } from '../../../Statemanagement/Statecontext';
import { Section, Title, Header } from '../../Feautures/Features';
import bos from '../../Images/forJumbotron.svg';
//import UpPlaceholder from '../../Images/UpPlaceholder.png';

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
  console.log(categorydata);

  let arr = [];
  for (let i = 0; i < 13; i++) {
    arr.push(
      <Link style={{ textDecoration: 'none' }} to={`/`}>
        <Categorycard />
      </Link>
    );
  }

  return (
    <Section>
      <Title>
        <Header>Shop for...</Header>
        <img src={bos} alt="icon" style={{ width: '6vw', minWidth: '50px', marginTop: '8px' }} />
      </Title>
      <Box>
        {categorydata.length ? (
          categorydata.map(({ name, imagePath, _id }) => {
            return (
              <Link key={_id} style={{ textDecoration: 'none' }} to={`/shops/${_id}/5eff8e76d75ecb3735b243b1`}>
                <Categorycard name={name} path={imagePath} />
              </Link>
            );
          })
        ) : (
          <>{arr}</>
        )}
      </Box>
    </Section>
  );
};

export default Categorylist;
