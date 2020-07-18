import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from '../Cards/Carddesktop';
import styled from 'styled-components';
import API from '../../../backend';
import { Row, Col } from 'react-bootstrap';

const Productbox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Productlist = ({ categoryId, cityId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1`).then(response => {
      setData(response.data.products);
    });
  }, [categoryId, data]);

  return (
      <>
      <Row style={{ margin: 'auto' }}>
        {data.map(({ price, images, _id }) => {
          return (
            <Col xs={6} md={3} key={_id} style={{ padding: 0 }}>
              <Productcard key={_id} price={price} path={images[0]} id={_id} />;
            </Col>
          );
        })}
      </Row>
    </>
    
  );
};

export default Productlist;
