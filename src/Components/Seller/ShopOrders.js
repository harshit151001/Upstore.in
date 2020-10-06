import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, OrderWrapper } from '../Routes/DeliverOrders';
import { isAutheticated } from '../../auth/helper/index';
import Axios from 'axios';
import API from '../../backend';
// import useWindowDimensions from '../../customapis/useWindowDimensions';
import styled from 'styled-components';

const ShippedBtn = styled.div`
  width: 100%;
  border: none;
  background-color: palegreen;
  font-weight: 850;
  color: lightseagreen;
  text-align: center;
  letter-spacing: 13px;
`;

export default function ShopOrders(props) {
  const [data, setData] = useState('');
  // const { width } = useWindowDimensions();

  const { token, user } = isAutheticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const { token, user } = isAutheticated();
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const loadandsetdata = async () => {
      const response = await Axios.get(`${API}/api/shop/orders/${user._id}/${props.shop.shopId}`, config);

      window.scroll(0, 0);

      setData(response.data.orders);
    };
    loadandsetdata();
  }, [props.shop]);

  const shipped = async (id, index) => {
    Axios.put(`${API}/api/order/${id}/status/${user._id}`, { status: 'Shipped' }, config)
      .then(() => {
        setData(data => {
          const newData = [...data];
          newData.splice(index, 1);
          return newData;
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <Wrapper style={{ width: '100%' }}>
      {data
        ? data.length
          ? data.map((document, index) => {
              return (
                <OrderWrapper key={index}>
                  <div>Transaction ID: {document.transaction_id}</div>
                  {document.products.map(({ name, price, quantity, product }, index) => {
                    return (
                      <div key={index} style={{ marginTop: '1vh' }}>
                        <div>Name: {name}</div>

                        <div>Price: {price}</div>
                        <div>Qty: {quantity}</div>
                        <div>
                          <Link to={`/productpage/${product}`}>Click to view</Link>
                        </div>
                      </div>
                    );
                  })}
                  <ShippedBtn
                    onClick={async () => {
                      shipped(document._id, index);
                    }}
                  >
                    SHIPPED
                  </ShippedBtn>
                </OrderWrapper>
              );
            })
          : 'No Orders'
        : 'Loading....'}
    </Wrapper>
  );
}
