import React from 'react';
import Productcard from '../Cards/Carddesktop';
import { Row, Col } from 'react-bootstrap';

const Productlist = props => {
  return (
    <>
      <Row style={{ margin: 'auto' }}>
        {props.data
          ? props.data.map(({ name, size, price, photos, _id }) => {
              return (
                <Col xs={6} md={4} lg={3} key={_id} style={{ padding: 0 }}>
                  <Productcard key={_id} price={price} path={photos[0]} id={_id} name={name} size={size} />
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
};

export default Productlist;
