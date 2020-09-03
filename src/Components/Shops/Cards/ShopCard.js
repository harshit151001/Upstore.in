import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, ProductImage, DetailsWrapper, PreviousButton } from '../../Users/Myorders';
import LoginImage from '../../Images/Login.png';
import GoToIcon from '../../Images/arrow.png';

export default function ShopList({ data }) {
  return data.map((doc, index) => {
    const { name, _id } = doc;

    return (
      <Card
        key={index}
        style={{
          width: '48%',
          marginBottom: '3vh',
          borderRadius: '22px'
        }}
      >
        <Link style={{ textDecoration: 'none' }} to={`/shop/${_id}`}>
          <CardContent>
            <ProductImage style={{ borderRadius: '22px' }} src={LoginImage} alt="Product" />
            <DetailsWrapper>
              <PreviousButton>
                {' '}
                <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
              </PreviousButton>
              <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase' }}>{name}</div>
              {/* <div style={{ color: '#7e818c', fontSize: '14px' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, consequuntur eum repellendus ducimus deleniti optio repellat fugit hic natus </div> */}
            </DetailsWrapper>
          </CardContent>
        </Link>
      </Card>
    );
  });
}
