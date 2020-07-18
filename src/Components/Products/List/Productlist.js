import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from '../Cards/Carddesktop';

import API from '../../../backend';
import { Row, Col } from 'react-bootstrap';

const Productlist = ({ categoryId, cityId }) => {
  const [data, setData] = useState([]);
  const [x, setX] = useState(true);

  useEffect(() => {
    let mount = true;
    const loadData = async () => {
      const response = await axios.get(
        `${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${
          x ? 1 : 2
        }`
      );
      if (mount) {
        setData(response.data.products);
        console.log(response.data);
      }
    };
    loadData();
    return () => {
      return (mount = false);
    };
  }, [categoryId, x]);

  return (
    <>
      <Row style={{ margin: 'auto' }}>
        <button
          onClick={() => {
            setX(false);
          }}
        >
          page 2
        </button>
        {data
          ? data.map(({ price, images, _id }) => {
              return (
                <Col xs={6} md={4} lg={3} key={_id} style={{ padding: 0 }}>
                  <Productcard
                    key={_id}
                    price={price}
                    path={images[0]}
                    id={_id}
                  />
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
};

export default Productlist;
