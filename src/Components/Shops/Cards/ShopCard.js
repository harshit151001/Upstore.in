import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, ProductImage, DetailsWrapper, PreviousButton } from '../../Users/Myorders';
import LoginImage from '../../Images/Login.png';
import GoToIcon from '../../Images/arrow.png';
import API from '../../../backend';
import styled from 'styled-components';

import UpPlaceholder from '../../Images/UpPlaceholder.png';

const Card = styled.div`
  box-shadow: 0px 0.5px 2.5px 2px rgba(40, 44, 63, 0.05);
  width: 100%;

  margin-bottom: 3vh;
  borderradius: 22px;

  width: 100%;
`;

export default function ShopList({ data }) {
  return data.map((doc, index) => {
    const { name, _id, banner } = doc;

    return (
      <Card key={index}>
        <Link style={{ textDecoration: 'none' }} to={`/shop/${_id}`}>
          <CardContent>
            <ProductImage style={{ borderRadius: '22px' }} src={banner ? API + banner.substr(6) : UpPlaceholder} alt="Product" />
            <DetailsWrapper>
              <PreviousButton>
                {' '}
                <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
              </PreviousButton>
              <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase' }}> {name} </div>
              {/* <div style={{ color: '#7e818c', fontSize: '14px' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, consequuntur eum repellendus ducimus deleniti optio repellat fugit hic natus </div> */}
            </DetailsWrapper>
          </CardContent>
        </Link>
      </Card>
    );
  });
}
