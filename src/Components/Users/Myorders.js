import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { isAutheticated } from '../../auth/helper/index';
import API from '../../backend';

const Myorders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const { token } = isAutheticated();
      const response = await fetch(
        `${API}/api/orders/user/5f0dc56ae688406e718da147`,
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
          console.log(response);
        }
      });
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {data.map((order, count) => {
        console.log(order.products[0].name);
        const { products } = order;
        return (
          <div key={count}>
            {products.map((prodDocument) => {
              const { count, product } = prodDocument;
              const { name, shopName, photos, price, _id } = product;
              console.log(_id);
              let src = photos[0].substr(6);
              console.log(API + photos[0].substr(6));
              return (
                <div key={_id} style={{ marginLeft: '250px' }}>
                  <Card>
                    <Row>
                      <Col>
                        <img
                          style={{ maxWidth: '15vw', maxHeight: '15vw' }}
                          src={`${API}${src}`}
                          alt="Product"
                        ></img>
                      </Col>
                      <Col>
                        <h4>{name}</h4>
                        <h4>{shopName}</h4>
                        <h4>{price}</h4>
                        <h4>{count}</h4>
                      </Col>
                    </Row>
                  </Card>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Myorders;
