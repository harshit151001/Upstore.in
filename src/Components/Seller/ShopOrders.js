import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, OrderWrapper } from '../Routes/DeliverOrders';
import { isAutheticated } from '../../auth/helper/index';
import Axios from 'axios';
import API from '../../backend';
import useWindowDimensions from '../../customapis/useWindowDimensions';

export default function ShopOrders(props) {
  console.log(props);
  const [data, setData] = useState('');
  const { width } = useWindowDimensions();

  const { token, user } = isAutheticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const loadandsetdata = async () => {
      const response = await Axios.get(`${API}/api/shop/orders/${user._id}/${props.shop.shopId}`, config);

      window.scroll(0, 0);
      console.log(response);
      setData(response.data.orders);
    };
    loadandsetdata();
  }, [props.shop]);

  const shipped = async id => {
    const response = await Axios.put(`${API}/api/order/${id}/status/${user._id}`, { status: 'Shipped' }, config);
    console.log(response);
  };
  console.log(data);
  return (
    <Wrapper style={width > 780 ? { width: '80%' } : { width: '100%' }}>
      {data
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
                <div
                  style={{ backgroundColor: 'grey' }}
                  onClick={async () => {
                    shipped(document._id);
                  }}
                >
                  SHIPPED
                </div>
              </OrderWrapper>
            );
          })
        : 'Loading....'}
    </Wrapper>
  );
}
