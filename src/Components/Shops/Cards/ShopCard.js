import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, DetailsWrapper } from '../../Users/Myorders';

import GoToIcon from '../../Images/arrow.png';
import API from '../../../backend';
import styled from 'styled-components';

import UpPlaceholder from '../../Images/UpPlaceholder.png';

const Card = styled.div`
  box-shadow: 0px 0.5px 2.5px 2px rgba(40, 44, 63, 0.05);
  width: 100%;

  margin-bottom: 3vh;
  width: 49%;
  background-color: white;

  @media (min-width: 990px) {
    border-radius: 20px;
  }

  @media (max-width: 990px) {
    width: 100%;
    font-size: 13px;
    margin-bottom: 1vh;
  }
`;

const ProductImage = styled.img`
  object-fit: cover;
  border: 1px solid #edeeef;
  width: 111px;
  height: 111px;
  border-radius: 22px;
  @media (max-width: 990px) {
    width: 90px;
    height: 90px;
    border-radius: 10px;
  }
`;

const PreviousButton = styled.div`
  float: right;
  margin-top: 6vh;
  font-size: 22px;
  height: 15px;

  @media (max-width: 990px) {
    margin-top: 3vh;
  }
`;

export default function ShopList({ data }) {
  return data.map((doc, index) => {
    const { name, _id, banner } = doc;

    return (
      <Card key={index}>
        <Link style={{ textDecoration: 'none' }} to={`/shop/${_id}`}>
          <CardContent>
            <ProductImage src={banner ? API + banner.substr(6) : UpPlaceholder} alt="Product" />

            <DetailsWrapper>
              <PreviousButton>
                {' '}
                <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
              </PreviousButton>
              <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase' }}>
                {/* <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase' }}> */} <p> {name} </p>{' '}
              </div>
            </DetailsWrapper>
          </CardContent>
        </Link>
      </Card>
    );
  });
}
