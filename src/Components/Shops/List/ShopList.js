import React from 'react';
import ShopCard from '../Cards/ShopCard';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: auto;
  width: 100%;
  justify-content: space-between;
  margin-top: 2vh;
  padding: 0px 2vh;
`;

export default function ShopList({ data }) {
  return (
    <ListWrapper>
      <ShopCard data={data} />
    </ListWrapper>
  );
}
