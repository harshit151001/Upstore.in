import React from 'react';
import ShopCard from '../Cards/ShopCard';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: auto;
  width: 100%;
  justify-content: space-between;

  padding: 2vh 2vh;

  @media (max-width: 990px) {
    padding: 2vh 0;
  }
`;

export default function ShopList({ data }) {
  return (
    <ListWrapper>
      <ShopCard data={data} />
    </ListWrapper>
  );
}
