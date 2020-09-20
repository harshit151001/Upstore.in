import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../backend';
import Axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
`;

const OrderWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 16px;
  box-shadow: 0px 0px 4px 1px rgba(97, 97, 97, 0.24);
  border: solid #ec436f;
  border-width: 4px;
  border-image-source: linear-gradient(90deg, rgba(236, 67, 111, 1) 0%, rgba(88, 115, 241, 1) 100%);
  border-image-slice: 1;
  border-radius: 10px;
`;

export default function DeliverOrders() {
  const [data, setData] = useState('');
  useEffect(() => {
    const loadandsetdata = async () => {
      const response = await Axios.get(`${API}/api//orders/all`);

      window.scroll(0, 0);

      setData(response.data);
    };
    loadandsetdata();
  }, []);

  const ShowVariant = (variants, _id) => {
    if (variants.length) {
      let variant = variants.find(doc => doc.product === _id);

      return (
        <div style={{ fontSize: '80%', color: 'lightseagreen' }}>
          {variant.size ? `Size: ${variant.size}` : ''} {variant.color ? `Color: ${variant.color}` : ''}
        </div>
      );
    }
  };

  return (
    <Wrapper>
      {data
        ? data.map(({ address: { address, contactName, contactNumber }, amount, transaction_id, products, user }, index) => {
            return (
              <OrderWrapper key={index}>
                <div>Name: {contactName}</div>
                <div>Mobile: {contactNumber}</div>
                <div>Delivery to: {address}</div>
                <div style={{ marginTop: '3vh' }}>
                  Order Details:
                  <div>Transaction ID: {transaction_id}</div>
                  <div>Total Rs. {amount}</div>
                  <div style={{ marginTop: '3vh' }}>
                    Products:
                    {products.map(({ name, price, quantity, product: { shopName, _id, variants } }, index) => {
                      return (
                        <div style={{ marginTop: '1vh' }} key={index}>
                          <div>Shop: {shopName}</div>
                          <div>Name: {name}</div>
                          <div>{ShowVariant(variants, _id)}</div>
                          <div>Price: {price}</div>
                          <div>Qty: {quantity}</div>
                          <div>
                            {' '}
                            <Link to={`/productpage/${_id}`}>Click to view</Link>{' '}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </OrderWrapper>
            );
          })
        : ''}
    </Wrapper>
  );
}
