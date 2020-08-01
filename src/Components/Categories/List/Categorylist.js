//!library
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Categorycard from '../Cards/Categorycard';
import { Row, Col } from 'react-bootstrap';

import { appContext } from '../../../Statemanagement/Statecontext';

const Categorylist = () => {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  return (
    <Row
      style={{
        margin: 'auto',
        background: '#fafafa',
        padding: '4vw',
      }}
    >
      {categorydata.map(({ name, imagePath, _id }) => {
        return (
          <Col xs={6} md={4} key={_id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
            >
              <Categorycard name={name} path={imagePath} id={_id} />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default Categorylist;
