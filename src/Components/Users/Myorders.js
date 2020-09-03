import React, { useState, useEffect } from 'react';
import { isAutheticated } from '../../auth/helper/index';
import API from '../../backend';
import styled from 'styled-components';
import GoToIcon from '../Images/arrow.png';

export const PreviousButton = styled.div`
  float: right;
  margin-top: 6vh;
  font-size: 22px;
  height: 15px;
`;

export const OrderWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Card = styled.div`
  box-shadow: 0px 0.5px 2.5px 2px rgba(40, 44, 63, 0.05);
  width: 100%;
`;
export const CardContent = styled.div`
  cursor: pointer;
  display: flex;
  margin: 5px 0 0 0;
  padding: 7px 12px 10px 12px;
`;
const ProductImage = styled.img`
  border: 1px solid #edeeef;
  width: 111px;
  height: 123px;
`;

export const DetailsWrapper = styled.div`
  padding: 0px 0px 5px 12px;
  width: 100%;
`;
const Myorders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const { token } = isAutheticated();
      const response = await fetch(
        `${API}/api/orders/user/${isAutheticated().user._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      response.json().then((response) => {
        if (mounted) {
          window.scroll(0, 0);
          setData(response);
          //console.log(response);
        }
      });
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  console.log(data);
  return (
    <>
      {data.map(({ products, transaction_id }, count) => {
        return (
          <OrderWrapper key={count}>
            <div>Order No: {transaction_id}</div>
            {products.map(({ quantity, product }) => {
              if (product) {
                const { name, shopName, photos, price, _id } = product;
                let src = photos[0].substr(6);
                return (
                  <Card key={_id}>
                    <CardContent>
                      <ProductImage src={`${API}${src}`} alt="Product" />
                      <DetailsWrapper>
                        <PreviousButton>
                          <img
                            style={{ height: '12px' }}
                            src={GoToIcon}
                            alt="Go to svg"
                          />{' '}
                        </PreviousButton>
                        <div
                          style={{
                            color: '#3E4152',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                          }}
                        >
                          {shopName}
                        </div>
                        <div style={{ color: '#7e818c', fontSize: '14px' }}>
                          {name}
                        </div>
                        <div style={{ color: '#7e818c', fontSize: '14px' }}>
                          Qty: {quantity}
                        </div>
                        <div>{price}</div>
                      </DetailsWrapper>
                    </CardContent>
                  </Card>
                );
              } else {
                return null;
              }
            })}
          </OrderWrapper>
        );
      })}
    </>
  );
};

export default Myorders;
